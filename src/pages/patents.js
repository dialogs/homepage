import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'astroturf';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PatentsMain } from '../components/Patents/PatentsMain';
import { PatentsLicenses } from '../components/Patents/PatentsLicenses';
import { PatentsAssociations } from '../components/Patents/PatentsAssociations';

const PatentsContainer = styled(Container)`
  @import '../styles/variables.css';

  @media (--tablet-viewport) {
    padding: 0;
  }

  @media (--tablet-landscape-viewport) {
    padding-left: 156px;
    padding-right: 156px;
  }

  @media (--laptop-viewport) {
    padding-left: 186px;
    padding-right: 186px;
  }
`;

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
        titleId="meta_title_patents"
        descriptionId="meta_description_patents"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_patents"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <PatentsContainer>
        <PatentsMain />
        {language === 'ru' && <PatentsLicenses />}
        {language === 'ru' && <PatentsAssociations />}
      </PatentsContainer>
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
