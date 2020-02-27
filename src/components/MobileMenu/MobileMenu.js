import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
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

  let toLink = `/${locale === 'ru' ? 'en/' : 'ru/'}${originalPath || ''}`;

  if (originalPath.indexOf('/blog/') >= 0) {
    toLink = locale === 'ru' ? '/en/blog/' : '/ru/blog/';
  }

  if (originalPath.indexOf('/career/') >= 0) {
    toLink = locale === 'ru' ? '/en/career/' : '/ru/career/';
  }

  if (originalPath.indexOf('/responsibility/') >= 0 && locale === 'ru') {
    toLink = '/en/';
  }

  return (
    <div className={classes}>
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <HeaderLogo to={`/${locale}/`} />
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
            to={`/${locale}/download/`}
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
          <Link
            to={`/${locale}/support/`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_support" />
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
