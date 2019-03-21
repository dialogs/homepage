import React from 'react';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';

export default () => {
  return (
    <Container>
      <div className="support__sections">
        <section className="support__section support__section-form">
          <PageHeader>Обратная связь</PageHeader>
          <form action="" className="form support__form">
            <div className="form-item form-item--default support__form-item">
              <input
                type="email"
                className="input--default"
                id="support-mail"
                name="SUPPORT_EMAIL"
              />
              <label for="support-mail" className="label--default">
                Ваш e-mail
              </label>
            </div>

            <div className="form-item form-item--default support__form-item">
              <input
                type="text"
                className="input--default"
                id="support-theme"
                name="SUPPORT_THEME"
              />
              <label for="support-theme" className="label--default">
                Тема
              </label>
            </div>

            <div className="form-item form-item--default support__form-item">
              <textarea
                className="input--default"
                id="support-description"
                rows="8"
                name="SUPPORT_DESCRIPTION"
              />
              <label for="support-description" className="label--default">
                Опишите ваш вопрос
              </label>
            </div>

            <div className="form-item form-item--checkbox support__form-item">
              <label for="support-personal" className="checkbox__label">
                <input
                  defaultChecked
                  className="checkbox__input"
                  type="checkbox"
                  id="support-personal"
                  name="SUPPORT_PERSONAL"
                />
                <span className="checkbox__checkbox">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.65856L4.94027 9.95214L13.1557 1"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="checkbox__text">
                  Я согласен на обработку персональных данных
                </span>
              </label>
            </div>

            <div className="form-item support__form-item support__form-item__button">
              <button type="submit" className="button button--default">
                Отправить
              </button>
            </div>

            <div className="form-item support__form-item support__form-item__answer-time">
              <span className="support__answer-time">
                Служба поддержки обычно отвечает в течение 15 минут
              </span>
            </div>
          </form>
        </section>

        <section className="support__section support__section-info">
          <div className="support__corporate">
            <div className="support__corporate-title">
              Обратитесь в службу поддержки
            </div>
            <div className="support__corporate-text">
              Если вы пользователь dialog Enterprise, воспользуйтесь
              <a
                href="https://support.dlg.im"
                className="link--default support__corporate__link-enterprise"
              >
                центром поддержки
              </a>{' '}
              для корпоративных клиентов.
            </div>
          </div>
          <div className="support__mail-box">
            <p className="support__mail-text">
              Связаться со службой поддержки можно также по e-mail:
            </p>
            <p>
              <a href="mailto:support@dlg.ru" className="link--default">
                support@dlg.ru
              </a>
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};
