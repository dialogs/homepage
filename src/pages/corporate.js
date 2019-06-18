import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Promo } from '../components/Promo/Promo';
import SecureCommunication from '../components/SecureCommunication';
import { EffectiveCommunication } from '../components/EffectiveCommunication/EffectiveCommunication';
import { Partnership } from '../components/Partnership/Partnership';
import { Offer } from '../components/Offer/Offer';

export default ({
  pageContext: { locale, url, originalPath },
  data: { promoImage1, promoImage2, secureImage, effectiveImage },
}) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_solutions"
        descriptionId="meta_description_solutions"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_solutions"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <Promo />
        <SecureCommunication image={secureImage} />
        <EffectiveCommunication image={effectiveImage} />
        <Partnership />
        <Offer />
      </Container>
    </Page>
  );
};

export const query = graphql`
  query {
    promoImage1: file(relativePath: { eq: "images/solution/solution_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    promoImage2: file(relativePath: { eq: "images/solution/solution_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    secureImage: file(
      relativePath: { eq: "images/solution/secure-communication.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 440) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    effectiveImage: file(
      relativePath: { eq: "images/solution/effective-communication.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
