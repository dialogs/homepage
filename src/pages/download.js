import React from 'react';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Download from '../components/Download';

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
        titleId="meta_title_download"
        descriptionId="meta_description_download"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_download"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container>
        <Download locale={language} />
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
