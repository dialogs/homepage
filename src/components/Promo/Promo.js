import React from 'react';

import { Section } from '../Section/Section';

import './Promo.css';

export function Promo({ element1, element2 }) {
  return (
    <Section className="promo">
      <div className="promo__content">
        {element1}
        {element2}
      </div>
    </Section>
  );
}
