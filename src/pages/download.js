import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Download from '../components/Download';

export default ({ pageContext: { locale, url, originalPath } }) => {
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
        <Download />
      </Container>
    </Page>
  );
};
