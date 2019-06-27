import React from 'react';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';

import './Promo.css';

export function Promo() {
  return (
    <Section className="promo">
      <div className="promo__content">
        <PageHeading className="solution">
          <FormattedMessage id="solutions_simple" />
        </PageHeading>
        <div className="promo__image">
          <img
            className="promo__img"
            src="/images/solution/promo_img.svg"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
}
