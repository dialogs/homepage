import React from 'react';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Support } from '../components/Support/Support';

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
    <Page>
      <FormattedMetaTags
        titleId="meta_title_support"
        descriptionId="meta_description_support"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_support"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container>
        <Support />
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
