import React from 'react';

import { OfferModal } from '../OfferModal/OfferModal';

export function Modals({ language, isOfferModalOpen, closeOfferModal }) {
  return (
    <>
      <OfferModal
        isOpen={isOfferModalOpen}
        onClose={closeOfferModal}
        language={language}
      />
    </>
  );
}
