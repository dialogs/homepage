import React from 'react';
import './Advantages.css';
import { Section } from '../Section/Section';
import { AdvantagesCard } from './AdvantagesCard';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';

export function Advantages() {
  return (
    <Section className="advantages">
      <PageHeading className="advantages__title">
        <FormattedMessage id="advantages_title" />
      </PageHeading>
      <div className="advantages__row">
        <AdvantagesCard
          image="/images/home/advantages/icon-1.svg"
          heading="advantages_safe"
          description="advantages_safe_description"
        />
        <AdvantagesCard
          image="/images/home/advantages/icon-2.svg"
          heading="advantages_robotics"
          description="advantages_robotics_description"
        />
        <AdvantagesCard
          image="/images/home/advantages/icon-3.svg"
          heading="advantages_usability"
          description="advantages_usability_description"
        />
      </div>
    </Section>
  );
}
