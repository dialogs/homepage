import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import OfferForm from '../OfferForm';
import './Offer.css';

export function Offer() {
  return (
    <Section className="offer">
      <div className="offer__header">
        <Heading>Получить предложение</Heading>
        <div className="offer__header__subheader">Пакет от 100 лицензий.</div>
      </div>
      <OfferForm className="offer__form" />
    </Section>
  );
}
