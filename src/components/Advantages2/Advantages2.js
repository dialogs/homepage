import React from 'react';
import './Advantages2.css';
import { Section } from '../Section/Section';
import { FormattedMessage } from 'react-intl';
import { AdvantagesInfo } from '../Advantages2/AdvantagesInfo';

export function Advantages2() {
  return (
    <Section className="advantages2">
      <div className="scrollable">
        <div className="advantages2__wrapper">
          <AdvantagesInfo index="1" row="phone-gap-big" />
          <AdvantagesInfo index="2" row="phone-gap-big" />
          <AdvantagesInfo index="3" row="phone-gap-small" />
        </div>
      </div>
    </Section>
  );
}
