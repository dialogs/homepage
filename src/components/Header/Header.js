import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { Container } from '../Container/Container';
import { MobileMenu } from '../MobileMenu/MobileMenu';

import './Header.css';

export function Header({
  locale,
  originalPath,
  isMobileMenuOpen,
  openMobileMenu,
  openOfferModal,
  closeMobileMenu,
}) {
  let toLink = locale === 'ru' ? `/en${originalPath}` : `/ru${originalPath}`;
  if (typeof window !== 'undefined') {
    if (window.location.href.indexOf('/blog/') > 0) {
      toLink = locale === 'ru' ? '/en/blog' : '/ru/blog';
    }
  }

  return (
    <header className="header">
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
        onClose={closeMobileMenu}
        openOfferModal={openOfferModal}
        locale={locale}
        originalPath={originalPath}
      />
    </header>
  );
}
