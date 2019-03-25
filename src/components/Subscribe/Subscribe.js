import React from 'react';

import { Section } from '../Section/Section';
import SubscribeForm from '../SubscribeForm';
import './Subscribe.css';

export function Subscribe() {
  return (
    <Section className="subscribe">
      <h3 className="subscribe__title">Подпишитесь на свежие статьи блога!</h3>
      <SubscribeForm className="subscribe__form" />
    </Section>
  );
}
