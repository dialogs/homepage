import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';
import { localeData, messages } from '../../i18n/locales';

import '../../styles/index.css';

addLocaleData(localeData);

export default ({ children, pageContext }) => {
  const { locale = 'en', languages, originalPath } = pageContext;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="main">
        <Header locale={locale} originalPath={originalPath} />
        {children}
        <Footer />
        <Modals />
      </main>
    </IntlProvider>
  );
};
