import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import SubscribeForm from '../SubscribeForm';
import './Subscribe.css';

export function Subscribe() {
  return (
    <Section className="subscribe">
      <h3 className="subscribe__title">
        <FormattedMessage id="subscribe_subscribe" />
      </h3>
      <SubscribeForm className="subscribe__form" />
    </Section>
  );
}
