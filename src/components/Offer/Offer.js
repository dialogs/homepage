import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import OfferForm from '../OfferForm';
import './Offer.css';

export function Offer() {
  return (
    <Section className="offer">
      <div className="offer__header" id="form">
        <Heading level="4">
          <FormattedMessage id="get_offer" />
        </Heading>
      </div>
      <OfferForm className="offer__form" />
    </Section>
  );
}
