import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { Support } from '../components/Support/Support';

export default () => {
  return (
    <Page>
      <FormattedMessage id="meta_title_support">
        {(title) => (
          <FormattedMessage id="meta_description_support">
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
        <Support />
      </Container>
    </Page>
  );
};
