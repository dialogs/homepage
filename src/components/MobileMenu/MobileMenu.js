import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import './MobileMenu.css';

export function MobileMenu({ isOpen, onClose }) {
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
          <Link to="/about" className="navigation__link">
            О нас
          </Link>
          <Link to="/download/cloud" className="navigation__link">
            Скачать
          </Link>
          <Link to="/support" className="navigation__link">
            Поддержка
          </Link>
          <Link to="/features" className="navigation__link">
            Функции
          </Link>
          <Link to="/blog" className="navigation__link">
            Блог
          </Link>
        </nav>
        <button className="mobile-menu__button">Получить предложение</button>
      </div>
    </div>
  );
}
