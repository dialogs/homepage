import React from 'react';
import { graphql } from 'gatsby';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Hero from '../components/Hero';
import { Platform } from '../components/Platform/Platform';
import Safety from '../components/Safety';
import { Incompany } from '../components/Incompany/Incompany';
import { Easy } from '../components/Easy/Easy';
import Business from '../components/Business';
import { Offer } from '../components/Offer/Offer';

export default ({ data }) => {
  return (
    <Page>
      <Container>
        <Hero heroImage={data.heroImage} />
        <Platform />
        <Safety />
        <Incompany />
        <Easy />
        <Business />
        <Offer />
      </Container>
    </Page>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "images/home/hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
