import React from 'react';

import { Section } from '../Section/Section';

import './FormOffer.css';

export function FormOffer() {
  return (
    <form action="" className="form offer__form">
      <div className="form-items__box">
        <div className="form-item form-item--default">
          <input
            type="text"
            className="input--default"
            id="offer-name"
            name="OFFER_NAME"
          />
          <label htmlFor="offer-name" className="label--default">
            Как к вам обращаться
          </label>
        </div>

        <div className="form-item form-item--default">
          <input
            type="email"
            className="input--default"
            id="offer-mail"
            name="OFFER_EMAIL"
          />
          <label htmlFor="offer-mail" className="label--default">
            Рабочий e-mail
          </label>
        </div>

        <div className="form-item form-item--default">
          <input
            type="tel"
            className="input--default"
            id="offer-phone"
            name="OFFER_PHONE"
          />
          <label htmlFor="offer-phone" className="label--default">
            Телефон
          </label>
        </div>

        <div className="form-item form-item--default">
          <input
            type="text"
            className="input--default"
            id="offer-company"
            name="OFFER_COMPANY"
          />
          <label htmlFor="offer-company" className="label--default">
            Название компании
          </label>
        </div>

        <div className="form-item form-item--select">
          <select
            className="select select--default"
            id="offer-users"
            name="OFFER_USERS"
          >
            <option disabled>Количество пользователей</option>
            <option value="1-10">1-10</option>
            <option value="val2">11-50</option>
            <option value="val3">51-100</option>
            <option value="val4">101-500</option>
            <option value="val5">500+</option>
          </select>
        </div>
      </div>

      <div className="form-items__box">
        <div className="form-item form-item--checkbox">
          <label htmlFor="offer-personal" className="checkbox__label">
            <input
              defaultChecked
              className="checkbox__input"
              type="checkbox"
              id="offer-personal"
              name="OFFER_PERSONAL"
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
              Я согласен на обработку личных данных
            </span>
          </label>
        </div>
        <div className="form-item form-item--checkbox">
          <label htmlFor="offer-subscribe" className="checkbox__label">
            <input
              className="checkbox__input"
              type="checkbox"
              id="offer-subscribe"
              name="OFFER_SUBSCRIBE"
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
              Подписаться на новостную рассылку
            </span>
          </label>
        </div>
      </div>

      <div className="form-item offer__form-item__button">
        <button type="submit" className="button button--default">
          Отправить заявку
        </button>
      </div>
    </form>
  );
}
