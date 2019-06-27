import React from 'react';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { CooperateBanner } from '../components/CooperateBanner/CooperateBanner';
import { Partners } from '../components/Partners/Partners';
import { PartnersHeader } from '../components/PartnersHeader/PartnersHeader';
import { PartnersInfo } from '../components/PartnersInfo/PartnersInfo';
import { PartnerAvailables } from '../components/PartnerAvailables/PartnerAvailables';
import PartnerForm from '../components/PartnerForm';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <Page style={{ overflow: 'visible' }}>
      <FormattedMetaTags
        titleId="meta_title_partners"
        descriptionId="meta_description_partners"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_partners"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />
      <PartnersHeader />
      <Container>
        <PartnersInfo />
      </Container>
      <CooperateBanner />
      <PartnerAvailables />
      <Partners />
      <Container>
        <PartnerForm />
      </Container>
    </Page>
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
