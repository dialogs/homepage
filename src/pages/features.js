import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Features } from '../components/Features/Features';

export default () => {
  return (
    <Page>
      <FormattedMessage id="meta_title_features">
        {(title) => (
          <FormattedMessage id="meta_description_features">
            {(description) => (
              <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>

      <Container>
        <Features />
      </Container>
    </Page>
  );
};
