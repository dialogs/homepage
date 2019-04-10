import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Promo } from '../components/Promo/Promo';
import { SecureCommunication } from '../components/SecureCommunication/SecureCommunication';
import { EffectiveCommunication } from '../components/EffectiveCommunication/EffectiveCommunication';
import { Partnership } from '../components/Partnership/Partnership';
import { Offer } from '../components/Offer/Offer';

export default () => {
  return (
    <Page>
      <FormattedMessage id="meta_title_solutions">
        {(title) => (
          <FormattedMessage id="meta_description_solutions">
            {(description) => (
              <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>

      <Container>
        <PageHeader className="solution">
          <FormattedMessage id="solutions_simple" />
        </PageHeader>
        <Promo
          element1={
            <img
              className="promo__image promo__image--main"
              src="/images/solution/solution-1.jpg"
              srcSet="/images/solution/solution-1@2x.jpg 2x"
              alt=""
            />
          }
          element2={
            <img
              className="promo__image promo__image--small"
              src="/images/solution/solution-2.jpg"
              srcSet="/images/solution/solution-2@2x.jpg 2x"
              alt=""
            />
          }
        />
        <SecureCommunication />
        <EffectiveCommunication />
        <Partnership />
        <Offer />
      </Container>
    </Page>
  );
};
