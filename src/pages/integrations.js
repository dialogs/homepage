import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { IntegrationsPromo } from '../components/IntegrationsPromo/IntegrationsPromo';
import { Possibilities } from '../components/Possibilities/Possibilities';
import { IntegrationsCatalog } from '../components/IntegrationsCatalog/IntegrationsCatalog';
import { IntegrationsInvite } from '../components/IntegrationsInvite/IntegrationsInvite';
import { OpenSource } from '../components/OpenSource/OpenSource';

export default ({ pageContext: { locale, url, originalPath } }) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_integrations"
        descriptionId="meta_description_integrations"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_integrations"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <IntegrationsPromo />
        <Possibilities />
        <IntegrationsCatalog />
        <IntegrationsInvite />
        <OpenSource />
      </Container>
    </Page>
  );
};
