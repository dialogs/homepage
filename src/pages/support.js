import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Support } from '../components/Support/Support';

export default () => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_support"
        descriptionId="meta_description_support"
      />
      <FormattedOpenGraph idOgTitle="meta_title_support" />

      <Container>
        <Support />
      </Container>
    </Page>
  );
};
