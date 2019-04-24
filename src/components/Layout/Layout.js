import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';

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
        <FormattedMetaTags
          titleId="meta_title_default"
          descriptionId="meta_description_default"
        />
        <FormattedOpenGraph
          idOgTitle="og_title_default"
          idOgDescription="og_description_default"
        />

        <Header locale={locale} originalPath={originalPath} />
        {children}
        <Footer locale={locale} />
        <Modals />
      </main>
    </IntlProvider>
  );
};
