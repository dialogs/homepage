import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'astroturf';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Container } from '../components/Container/Container';
import { SocialResponsibility } from '../components/Responsibility/Responsibility';

const ResponsibilityContainer = styled(Container)`
  @media (--tablet-viewport) {
    padding: 0;
    margin-bottom: 40px;
  }

  @media (--tablet-landscape-viewport) {
    margin-left: 160px;
    margin-right: 156px;
    margin-bottom: 40px;
  }

  @media (--laptop-viewport) {
    margin-left: 160px;
    margin-right: 156px;
    margin-bottom: 40px;
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
    <Container>
      <FormattedMetaTags
        titleId="meta_title_legal"
        descriptionId="meta_description_legal"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_legal"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />
      <ResponsibilityContainer>
        {language === 'ru' && <SocialResponsibility />}
      </ResponsibilityContainer>
    </Container>
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
