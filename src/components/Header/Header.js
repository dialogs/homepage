import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import styled from 'astroturf';
import { Container } from '../Container/Container';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import './Header.css';

const HeaderContainer = styled.header`
  @import '../../styles/variables.css';

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 0;
  transform: translateZ(0);

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
    transform: translateY(-5%);
    transition: transform 250ms ease-out, background 0ms 250ms ease-out;
    padding: 20px 0;
    box-shadow: 0 1px 3px -1px color-mod(#000 alpha(10%));
  }

  &.stickyVisible {
    transition: transform 250ms ease-out, background 0ms 0ms ease-out;
    background-color: color-mod(#fff alpha(95%));
    transform: translateY(100%);
  }
`;

const TOP_SCROLL_HIDE_OFFSET = 500;
const TOP_SCROLL_REMOVE_OFFSET = 250;

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

  let toLink = `/${locale === 'ru' ? 'en/' : 'ru/'}${originalPath || ''}`;

  if (originalPath.indexOf('/blog/') >= 0) {
    toLink = locale === 'ru' ? '/en/blog/' : '/ru/blog/';
  }
  console.log({ originalPath, toLink });

  if (originalPath.indexOf('/career/') >= 0) {
    toLink = locale === 'ru' ? '/en/career/' : '/ru/career/';
  }

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  useEffect(() => {
    function handleWindowLoad() {
      prevScrollPosition = getCurrentScroll();
    }

    function handleScroll() {
      const currentScroll = getCurrentScroll();
      const isScrollingDown = currentScroll > prevScrollPosition;

      if (isScrollingDown) {
        if (currentScroll > TOP_SCROLL_REMOVE_OFFSET) {
          setSticky(true);
        }

        if (currentScroll > TOP_SCROLL_HIDE_OFFSET) {
          setStickyVisible(false);
        }
      } else {
        if (currentScroll < TOP_SCROLL_REMOVE_OFFSET) {
          setSticky(false);
        }

        if (currentScroll < TOP_SCROLL_HIDE_OFFSET) {
          setStickyVisible(false);
        }

        if (currentScroll > TOP_SCROLL_HIDE_OFFSET) {
          setStickyVisible(true);
        }
      }

      prevScrollPosition = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener('load', handleWindowLoad);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      console.log('unload listeners');
      window.removeEventListener('load', handleWindowLoad);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer stickyVisible={isStickyVisible} sticky={isSticky}>
      <Container>
        <div className="header__columns">
          <div className="header__col">
            <HeaderLogo to={`/${locale}/`} />
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/corporate/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_solutions" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/features/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_features" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/download/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_download" />
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/pricing/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_pricing" />
                  </Link>
                </li>

                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/about/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_about" />
                  </Link>
                </li>

                <li className="header__menu-item">
                  <Link
                    to={`/${locale}/career/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_career" />
                  </Link>
                </li>

                {/* <li className="header__menu-item">
                  <Link
                    to={`/${locale}/support/`}
                    className="header__menu-link"
                    activeClassName="header__menu-link--active"
                  >
                    <FormattedMessage id="menu_support" />
                  </Link>
                </li> */}
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
