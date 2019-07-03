import React from 'react';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Hero from '../components/Hero';
import { Platform } from '../components/Platform/Platform';
import Safety from '../components/Safety';
import { Incompany } from '../components/Incompany/Incompany';
import { Easy } from '../components/Easy/Easy';
import Business from '../components/Business';
import { Offer } from '../components/Offer/Offer';

export default ({
  pageContext: {
    intl: { language },
  },
}) => {
  return (
    <Page>
      <Container>
        <Hero />
        <Platform />
        <Safety />
        <Incompany />
        <Easy />
        <Business />
        <Offer language={language} />
      </Container>
    </Page>
  );
};
