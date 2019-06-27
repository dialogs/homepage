import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { graphql } from 'gatsby';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Promo } from '../components/Promo/Promo';
import SecureCommunication from '../components/SecureCommunication';
import { EffectiveCommunication } from '../components/EffectiveCommunication/EffectiveCommunication';
import { Partnership } from '../components/Partnership/Partnership';
import { Offer } from '../components/Offer/Offer';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    promoImage1,
    promoImage2,
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

      <Container>
        <Promo />
        <SecureCommunication />>
        <EffectiveCommunication />
        <Partnership />
        <Offer language={language} />
      </Container>
    </Page>
  );
};

export const pageQuery = graphql`
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
