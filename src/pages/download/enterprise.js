import React from 'react';
import { graphql } from 'gatsby';

import FormattedMetaTags from '../../components/FormattedMetaTags';
import FormattedOpenGraph from '../../components/FormattedOpenGraph';
import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { DownloadEnterprise } from '../../components/DownloadEnterprise/DownloadEnterprise';

export default ({
  data: images,
  pageContext: { locale, url, originalPath },
}) => {
  console.log({ images });
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_download"
        descriptionId="meta_description_download"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_download"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <DownloadEnterprise locale={locale} images={images} />
      </Container>
    </Page>
  );
};

export const query = graphql`
  query {
    desktop_macos: file(
      relativePath: { eq: "images/download/enterprise_desktop.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 425) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    iphone: file(
      relativePath: { eq: "images/download/enterprise_iphone.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 110) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    android: file(
      relativePath: { eq: "images/download/enterprise_android.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 110) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
