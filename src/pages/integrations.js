import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { IntegrationsHeader } from '../components/IntegrationsHeader/IntegrationsHeader';
import { Possibilities } from '../components/Possibilities/Possibilities';
import { IntegrationsCatalog } from '../components/IntegrationsCatalog/IntegrationsCatalog';
import { IntegrationsBanner } from '../components/IntegrationsBanner/IntegrationsBanner';
import { OpenSource } from '../components/OpenSource/OpenSource';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    headerImage,
  },
}) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_integrations"
        descriptionId="meta_description_integrations"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_integrations"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <IntegrationsHeader image={headerImage} />
      <Container>
        <Possibilities />
        <IntegrationsCatalog />
      </Container>
      {/* <IntegrationsBanner /> */}
      <Container>
        <OpenSource />
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
    headerImage: file(
      relativePath: { eq: "images/integrations/integrations_promo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
