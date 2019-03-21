import React from 'react';

export function Header() {
  return (
    <header className="site__header">
      <div className="container">
        <div className="header__columns">
          <div className="header__col">
            <div className="header__logo">
              <a href="/" className="header__logo-link">
                <img
                  src="/images/logo-header.svg"
                  alt=""
                  className="header__logo-icon"
                />
              </a>
            </div>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a href="/about" className="header__menu-link">
                    О нас
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/download/cloud" className="header__menu-link">
                    Скачать
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/support" className="header__menu-link">
                    Поддержка
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/features" className="header__menu-link">
                    Функции
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="/blog" className="header__menu-link">
                    Блог
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__col">
            <button className="header__button header__button--offer">
              Получить предложение
            </button>
            <button className="header__button header__button--lang btn__change-lang">
              en
            </button>
            <button className="header__button header__button--menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
