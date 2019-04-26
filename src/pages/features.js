import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Features } from '../components/Features/Features';

export default ({ pageContext: { locale, url, originalPath } }) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_features"
        descriptionId="meta_description_features"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_features"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <Features />
      </Container>
    </Page>
  );
};
