import React from 'react';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Hero from '../components/Hero';
// import { Platform } from '../components/Platform/Platform';
import { Advantages } from '../components/Advantages/Advantages';
import { Advantages2 } from '../components/Advantages2/Advantages2';
import { Solutions } from '../components/Solutions/Solutions';
import { Organize } from '../components/Organize/Organize';
import { Optimize } from '../components/Optimize/Optimize';
// import { Safety } from '../components/Safety/Safety';
import { Incompany } from '../components/Incompany/Incompany';
import { Easy } from '../components/Easy/Easy';
import { Business } from '../components/Business/Business';
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
        <Advantages />
        <Advantages2 />
        <Solutions language={language} />
        <Organize />
        <Optimize />
        {/*<Platform />*/}
        {/*<Safety language={language} />*/}
        {/*<Incompany />*/}
        {/*<Easy />*/}
        <Business language={language} />
        <Offer language={language} />
      </Container>
    </Page>
  );
};
