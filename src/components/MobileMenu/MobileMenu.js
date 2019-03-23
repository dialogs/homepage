import React from 'react';

import './MobileMenu.css';

export function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                src="images/logo-header.svg"
                alt=""
                className="header__logo-icon"
              />
            </a>
          </div>
          <button className="header__button header__button--menu" />
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/about" className="navigation__link">
                О нас
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/download/cloud" className="navigation__link">
                Скачать
              </a>
            </li>
            <li className="navigation__item">
              <a href="/support" className="navigation__link">
                Поддержка
              </a>
            </li>
            <li className="navigation__item navigation__item--parent">
              <a href="/features" className="navigation__link">
                Функции
              </a>
            </li>
            <li className="navigation__item">
              <a href="/blog" className="header__menu-link">
                Блог
              </a>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu__button">Получить предложение</button>
      </div>
    </div>
  );
}
