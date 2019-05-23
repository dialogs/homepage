import React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import { HeadScripts } from '../HeadScripts/HeadScripts';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';

import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';
import { localeData, messages } from '../../i18n/locales';

import '../../styles/index.css';

addLocaleData(localeData);

export default ({ children, pageContext }) => {
  const { locale = 'en', originalPath, url } = pageContext;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="main">
        <Helmet htmlAttributes={{ lang: locale }} />
        <FormattedMetaTags
          titleId="meta_title_default"
          descriptionId="meta_description_default"
        />
        <FormattedOpenGraph
          idOgTitle="og_title_default"
          idOgDescription="og_description_default"
          url={url}
          path={`/${locale}${originalPath}`}
        />

        <HeadScripts />

        <Header locale={locale} originalPath={originalPath} />
        {children}
        <Footer locale={locale} />
        <Modals />
      </main>
    </IntlProvider>
  );
};
