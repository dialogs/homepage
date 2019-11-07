import React, { useEffect } from 'react';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Hero from '../components/Hero';
import { Platform } from '../components/Platform/Platform';
import { Safety } from '../components/Safety/Safety';
import { Incompany } from '../components/Incompany/Incompany';
import { Easy } from '../components/Easy/Easy';
import { Business } from '../components/Business/Business';
import { Offer } from '../components/Offer/Offer';

import { getVersion } from '../../utils/getVersion.js';

export default ({
  pageContext: {
    intl: { language },
  },
}) => {
  useEffect(() => {
    console.log(`App version: ${getVersion()}`);
  }, []);

  return (
    <Page>
      <Container>
        <Hero />
        <Platform />
        <Safety language={language} />
        <Incompany />
        <Easy />
        <Business language={language} />
        <Offer language={language} />
      </Container>
    </Page>
  );
};
