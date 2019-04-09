import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import Helmet from 'react-helmet';

import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';
import { localeData, messages } from '../../i18n/locales';

import '../../styles/index.css';

addLocaleData(localeData);

export default ({ children, pageContext }) => {
  const { locale = 'en', languages, originalPath } = pageContext;

  const metaData = {
    title:
      locale === 'ru'
        ? 'dialog | Платформа для простых и эффективных коммуникаций'
        : 'dialog | A platform for simple and efficient communications',
    description:
      locale === 'ru'
        ? 'это корпоративный мессенджер с возможностью установки на внутренний сервер организации'
        : 'handy and feature-rich enterprise multi-device messenger available for server or cloud – Slack-like, but not Slack-limited',
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className="main">
        <Helmet>
          <title>{metaData.title}</title>
          <meta name="description" content={metaData.description} />
        </Helmet>

        <Header locale={locale} originalPath={originalPath} />
        {children}
        <Footer locale={locale} />
        <Modals />
      </main>
    </IntlProvider>
  );
};
