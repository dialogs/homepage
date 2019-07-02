import React from 'react';
import { graphql } from 'gatsby';
import { FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Promo } from '../components/Promo/Promo';
import { SecureCommunication } from '../components/SecureCommunication/SecureCommunication';
import { EffectiveCommunication } from '../components/EffectiveCommunication/EffectiveCommunication';
import { Partnership } from '../components/Partnership/Partnership';
import { Offer } from '../components/Offer/Offer';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { PageHeading } from '../components/PageHeading/PageHeading';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    headerImage,
    secureImage,
    effectiveImage,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_solutions"
        descriptionId="meta_description_solutions"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_solutions"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <PageHeader image={headerImage}>
        <PageHeading>
          <FormattedHTMLMessage id="solutions_simple" />
        </PageHeading>
      </PageHeader>

      <SecureCommunication language={language} image={secureImage} />
      <EffectiveCommunication image={effectiveImage} />
      <Container>
        <Partnership />
        <Offer language={language} />
      </Container>
    </Page>
  );
};

export const pageQuery = graphql`
  query {
    headerImage: file(
      relativePath: { eq: "images/solution/header_image.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    secureImage: file(
      relativePath: { eq: "images/solution/secure_communication.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    effectiveImage: file(
      relativePath: { eq: "images/solution/effective_communication.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
