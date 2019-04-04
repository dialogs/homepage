import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Modal, ModalHeader, ModalBody } from '../Modal';
import OfferForm from '../OfferForm';
import './OfferModal.css';

export function OfferModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <ModalHeader>
        <FormattedMessage id="get_offer" />
      </ModalHeader>
      <ModalBody>
        <OfferForm className="offer_modal__form" />
      </ModalBody>
    </Modal>
  );
}
