import React from 'react';
import FormattedMetaTags from '../../components/FormattedMetaTags';
import FormattedOpenGraph from '../../components/FormattedOpenGraph';

import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { DownloadEnterprise } from '../../components/DownloadEnterprise/DownloadEnterprise';

export default () => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_download"
        descriptionId="meta_description_download"
      />
      <FormattedOpenGraph idOgTitle="meta_title_download" />

      <Container>
        <DownloadEnterprise />
      </Container>
    </Page>
  );
};
