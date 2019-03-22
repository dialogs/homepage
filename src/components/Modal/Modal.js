import React from 'react';

import { Heading } from '../Heading/Heading';
import { FormOffer } from '../FormOffer/FormOffer';

import './Modal.css';

export function Modal({ onClose }) {
  return (
    <section className="modal">
      <div className="modal__overlay" onClick={onClose}>
        <div className="modal__window">
          <div className="modal__window__header">
            <Heading>Получить предложение</Heading>
            <img
              className="modal__window__close"
              src="/images/svg-icons/icon-clear.svg"
              alt="Закрыть окно"
              onClick={onClose}
            />
          </div>
          <div className="modal__window__body">
            <FormOffer />
          </div>
        </div>
      </div>
    </section>
  );
}
