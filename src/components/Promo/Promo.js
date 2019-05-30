import React from 'react';

import { Section } from '../Section/Section';

import './Promo.css';

export function Promo({ children }) {
  return (
    <Section className="promo">
      <div className="promo__content">{children}</div>
    </Section>
  );
}
