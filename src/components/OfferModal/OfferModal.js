import React from 'react';

import { Modal } from '../Modal/Modal';
import OfferForm from '../OfferForm';
import './OfferModal.css';

export function OfferModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose} title="Получить предложение">
      <OfferForm className="offer_modal__form" />
    </Modal>
  );
}
