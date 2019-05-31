import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Container } from '../Container/Container';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import debounce from 'lodash.debounce';
import './Header.css';

const HeaderContainer = styled.header`
  @import '../../styles/variables.css';

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 0;

  @media (--tablet-viewport) {
    padding: 26px 0;
  }

  @media (--tablet-landscape-viewport) {
    padding: 25px 0;
  }

  @media (--laptop-viewport) {
    padding: 45px 0;
  }

  &.sticky {
    position: fixed;
    top: auto;
    bottom: 100%;
    transform: translateY(0%) translateZ(0);
    transition: transform 250ms ease-out, background 0ms 250ms ease-out;
    padding: 20px 0;
    box-shadow: 0 2px 2px 0 color-mod(#000 alpha(10%));
  }

  &.stickyVisible {
    transition: transform 250ms ease-out, background 0ms 0ms ease-out;
    background: color-mod(#fff alpha(95%));
    transform: translateY(100%);
  }
`;

const TOP_SCROLL_OFFSET = 350;

export function Header({
  locale,
  originalPath,
  isMobileMenuOpen,
  openMobileMenu,
  openOfferModal,
  closeMobileMenu,
}) {
  const [isSticky, setSticky] = useState(false);
  const [isStickyVisible, setStickyVisible] = useState(false);
  let prevScrollPosition = 0;
  let toLink = `/${locale === 'ru' ? 'en' : 'ru'}${originalPath || ''}`;
  if (typeof window !== 'undefined') {
    if (window.location.href.indexOf('/blog/') > 0) {
      toLink = locale === 'ru' ? '/en/blog' : '/ru/blog';
    }
  }

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  useEffect(() => {
    function handleWindowLoad() {
      prevScrollPosition = getCurrentScroll();
    }

    const handleScroll = debounce(
      () => {
        const currentScroll = getCurrentScroll();

        if (currentScroll > TOP_SCROLL_OFFSET - 100) {
          setSticky(true);
        } else {
          setSticky(false);
          setStickyVisible(false);
        }

        if (currentScroll > TOP_SCROLL_OFFSET) {
          const isScrollingDown = currentScroll > prevScrollPosition;
          setStickyVisible(!isScrollingDown);
        } else {
          setStickyVisible(false);
        }

        prevScrollPosition = currentScroll <= 0 ? 0 : currentScroll;
      },
      200,
      { leading: true, maxWait: 500 },
    );

    window.addEventListener('load', handleWindowLoad);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('load', handleWindowLoad);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer stickyVisible={isStickyVisible} sticky={isSticky}>
      <Container>
        <div className="header__columns">
          <div className="header__col">
            <div className="header__logo">
              <Link to={`/${locale}`} className="header__logo-link">
                <img
                  src="/images/logo-header.svg"
                  alt="dialog"
                  className="header__logo-icon"
                />
              </Link>
            </div>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/corporate`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_solutions" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/features`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_features" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/download/enterprise`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_download" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/pricing`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_pricing" />
                  </Link>
                </li>

                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/about`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_about" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__col">
            <button
              className="header__button header__button--offer"
              onClick={openOfferModal}
            >
              <FormattedMessage id="button_get_offer" />
            </button>
            <Link
              to={toLink}
              className="header__button header__button--lang btn__change-lang"
            >
              {locale === 'ru' ? 'en' : 'ru'}
            </Link>
            <button
              className="header__button header__button--menu"
              onClick={openMobileMenu}
            />
          </div>
        </div>
      </Container>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isSticky={isStickyVisible}
        onClose={closeMobileMenu}
        openOfferModal={openOfferModal}
        locale={locale}
        originalPath={originalPath}
      />
    </HeaderContainer>
  );
}
