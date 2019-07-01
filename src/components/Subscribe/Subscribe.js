import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import SubscribeForm from '../SubscribeForm';
import './Subscribe.css';

export function Subscribe({ language }) {
  return (
    <Section className="subscribe">
      <Heading level="1" style={{ padding: '15px 15% 15px 0' }}>
        <FormattedMessage id="subscribe_subscribe" />
      </Heading>
      <SubscribeForm className="subscribe__form" language={language} />
    </Section>
  );
}
