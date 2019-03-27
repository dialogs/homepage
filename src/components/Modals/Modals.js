import React from 'react';

import { OfferModal } from '../OfferModal/OfferModal';

export function Modals({ isOfferModalOpen, closeOfferModal }) {
  return (
    <>
      <OfferModal isOpen={isOfferModalOpen} onClose={closeOfferModal} />
    </>
  );
}
