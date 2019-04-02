import React from 'react';

import { Modal, ModalHeader, ModalBody } from '../Modal';
import OfferForm from '../OfferForm';
import './OfferModal.css';

export function OfferModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <ModalHeader>Получить предложение</ModalHeader>
      <ModalBody>
        <OfferForm className="offer_modal__form" />
      </ModalBody>
    </Modal>
  );
}
