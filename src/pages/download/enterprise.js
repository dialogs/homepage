import React from 'react';
import { styled } from 'astroturf';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../../components/FormattedMetaTags';
import FormattedOpenGraph from '../../components/FormattedOpenGraph';
import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import {
  DownloadEnterpriseHeader,
  DownloadDesktop,
  DownloadMobile,
  DownloadWeb,
} from '../../components/Download';

const DownloadClientsSection = styled(Section)`
  @import '../../styles/variables.css';

  padding: 0;

  @media (--tablet-viewport) {
    display: flex;
    flex-flow: row nowrap;
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
        titleId="meta_title_download"
        descriptionId="meta_description_download"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_download"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container fluid style={{ position: 'relative' }}>
        <DownloadEnterpriseHeader language={language} />
        <Container>
          <DownloadClientsSection>
            <DownloadDesktop isEnterprise language={language} />
            <DownloadMobile isEnterprise language={language} />
          </DownloadClientsSection>
        </Container>
      </Container>
      <DownloadWeb isEnterprise />
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
