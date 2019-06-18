import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { FormattedMessage } from 'react-intl';

import './IntegrationsPromo.css';

export function IntegrationsPromo() {
  return (
    <Section className="promo">
      <div className="promo__content">
        <PageHeader className="integrations">
          <FormattedMessage id="integrations_title" />
        </PageHeader>
        <div className="promo__image">
          <img
            className="promo__img"
            src="/images/integrations/integrations_promo.svg"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
}
