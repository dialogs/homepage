import React from 'react';

import { Modal } from '../Modal/Modal';
import { FormOffer } from '../FormOffer/FormOffer';

export function OfferModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <FormOffer />
    </Modal>
  );
}
