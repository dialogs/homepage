import React from 'react';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';
import { localeData, messages } from '../../i18n/locales';

import '../../styles/index.css';

addLocaleData(localeData);

export default ({ children, pageContext }) => {
  const { locale = 'en', originalPath } = pageContext;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="main">
        <FormattedMessage id="meta_title_default">
          {(title) => (
            <FormattedMessage id="meta_description_default">
              {(description) => (
                <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                </Helmet>
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>

        <Header locale={locale} originalPath={originalPath} />
        {children}
        <Footer locale={locale} />
        <Modals />
      </main>
    </IntlProvider>
  );
};
