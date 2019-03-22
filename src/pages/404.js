import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../components/Container/Container';
import { Page } from '../components/Page/Page';
import { Section } from '../components/Section/Section';
import { Heading } from '../components/Heading/Heading';

export default () => (
  <Page>
    <Container>
      <Section className="not_found">
        <Heading level="1">Oops...</Heading>
        <Heading level="3">
          We can't seem to find the page you are looking for.
        </Heading>
        <div className="not_found__links">
          <Link to="/" className="link link--default">
            Go back
          </Link>
          <Link to="/" className="link link--default">
            Go home
          </Link>
        </div>
      </Section>
    </Container>
  </Page>
);
