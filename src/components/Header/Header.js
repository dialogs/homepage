import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../Container/Container';
import { MobileMenu } from '../MobileMenu/MobileMenu';

import './Header.css';

export function Header({
  isMobileMenuOpen,
  openMobileMenu,
  openOfferModal,
  closeMobileMenu,
}) {
  return (
    <header className="site__header">
      <Container>
        <div className="header__columns">
          <div className="header__col">
            <div className="header__logo">
              <Link to="/" className="header__logo-link">
                <img
                  src="/images/logo-header.svg"
                  alt=""
                  className="header__logo-icon"
                />
              </Link>
            </div>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Link to="/about" className="header__menu-link">
                    О нас
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/download" className="header__menu-link">
                    Скачать
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/support" className="header__menu-link">
                    Поддержка
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/features" className="header__menu-link">
                    Функции
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/blog" className="header__menu-link">
                    Блог
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
              Получить предложение
            </button>
            <button className="header__button header__button--lang btn__change-lang">
              en
            </button>
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
      />
    </header>
  );
}
