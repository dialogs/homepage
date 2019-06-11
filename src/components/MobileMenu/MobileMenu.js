import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import './MobileMenu.css';

export function MobileMenu({
  isOpen,
  onClose,
  openOfferModal,
  locale,
  originalPath,
  isSticky,
}) {
  const classes = classNames('mobile-menu', {
    'mobile-menu--opened': isOpen,
    'mobile-menu--sticky': isSticky,
  });

  let toLink = locale === 'ru' ? `/en${originalPath}` : `/ru${originalPath}`;

  if (typeof window !== 'undefined') {
    if (window.location.href.indexOf('/blog/') > 0) {
      toLink = locale === 'ru' ? '/en/blog/' : '/ru/blog/';
    }
    if (window.location.href.indexOf('/career/') > 0) {
      toLink = locale === 'ru' ? '/en/career/' : '/ru/career/';
    }
  }

  return (
    <div className={classes}>
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img
                src="/images/logo-header.svg"
                alt="dialog"
                className="header__logo-icon"
              />
            </Link>
          </div>
          <button
            className="header__button header__button--menu"
            onClick={onClose}
          />
        </div>
        <nav className="navigation">
          <Link
            to={`/${locale}/corporate/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_solutions" />
          </Link>
          <Link
            to={`/${locale}/features/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_features" />
          </Link>
          <Link
            to={`/${locale}/download/enterprise/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_download" />
          </Link>
          <Link
            to={`/${locale}/pricing/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_pricing" />
          </Link>
          <Link
            to={`/${locale}/about/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_about" />
          </Link>
          <Link to={toLink} className="navigation__link navigation__link--lang">
            {locale === 'ru' ? 'en' : 'ru'}
          </Link>
        </nav>
        <button className="mobile-menu__button" onClick={openOfferModal}>
          <FormattedMessage id="button_get_offer" />
        </button>
      </div>
    </div>
  );
}
