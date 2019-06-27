import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { CooperateBanner } from '../components/CooperateBanner/CooperateBanner';
import { Partners } from '../components/Partners/Partners';
import { Offer } from '../components/Offer/Offer';
import { PartnersHeader } from '../components/PartnersHeader/PartnersHeader';
import { PartnersInfo } from '../components/PartnersInfo/PartnersInfo';
import { PartnerAvailables } from '../components/PartnerAvailables/PartnerAvailables';

export default ({ pageContext: { locale, url, originalPath } }) => {
  return (
    <Page style={{ overflow: 'visible' }}>
      <FormattedMetaTags
        titleId="meta_title_partners"
        descriptionId="meta_description_partners"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_partners"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <PartnersHeader />
      <Container>
        <PartnersInfo />
      </Container>
      <CooperateBanner />
      <PartnerAvailables />
      <Partners />
      <Container>
        <Offer />
      </Container>
    </Page>
  );
};
