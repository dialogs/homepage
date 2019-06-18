import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { FormattedMessage } from 'react-intl';

import './Promo.css';

export function Promo() {
  return (
    <Section className="promo">
      <div className="promo__content">
        <PageHeader className="solution">
          <FormattedMessage id="solutions_simple" />
        </PageHeader>
        <div className="promo__image">
          <img className="promo__img" src="/images/solution/promo_img.svg" />
        </div>
      </div>
    </Section>
  );
}
