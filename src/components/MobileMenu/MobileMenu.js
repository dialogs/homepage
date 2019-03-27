import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import './MobileMenu.css';

export function MobileMenu({ isOpen, onClose, openOfferModal }) {
  const classes = classNames('mobile-menu', {
    'mobile-menu--opened': isOpen,
  });

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
          <Link to="/about" className="navigation__link" onClick={onClose}>
            О нас
          </Link>
          <Link to="/download" className="navigation__link" onClick={onClose}>
            Скачать
          </Link>
          <Link to="/support" className="navigation__link" onClick={onClose}>
            Поддержка
          </Link>
          <Link to="/features" className="navigation__link" onClick={onClose}>
            Функции
          </Link>
          <Link to="/blog" className="navigation__link" onClick={onClose}>
            Блог
          </Link>
        </nav>
        <button className="mobile-menu__button" onClick={openOfferModal}>
          Получить предложение
        </button>
      </div>
    </div>
  );
}
