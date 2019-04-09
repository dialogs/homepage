import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '../components/Container/Container';
import { Page } from '../components/Page/Page';
import { NotFound } from '../components/NotFound/NotFound';

export default () => (
  <Page>
    <Helmet>
      <title>404 | dialog</title>
    </Helmet>

    <Container>
      <NotFound />
    </Container>
  </Page>
);
