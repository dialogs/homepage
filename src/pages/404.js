import React from 'react';

import { Container } from '../components/Container/Container';
import { Page } from '../components/Page/Page';
import { NotFound } from '../components/NotFound/NotFound';

export default () => (
  <Page>
    <Container>
      <NotFound />
    </Container>
  </Page>
);
