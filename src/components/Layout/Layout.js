import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from 'astroturf';

import { HeadScripts } from '../HeadScripts/HeadScripts';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';
import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';
import { safeStorage } from '../../utils/safeStorage';

import '../../styles/index.css';

const Main = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  padding-top: 56px;

  @media (--tablet-viewport) {
    padding-top: 84px;
  }

  @media (--tablet-landscape-viewport) {
    padding-top: 100px;
  }

  @media (--laptop-viewport) {
    padding-top: 140px;
  }

  &.overflow {
    overflow: visible;
  }
`;

export default ({
  children,
  pageContext: {
    intl: { language, originalPath },
    siteUrl,
  },
}) => {
  useEffect(() => {
    // Check if user goes here from somwere else
    // eslint-disable-next-line no-restricted-globals
    if (
      document.referrer &&
      document.referrer.indexOf(document.location.hostname) < 0
    ) {
      try {
        const referrer = safeStorage.get('referrer');

        // Set referrer
        if (referrer) {
          safeStorage.set(
            'referrer',
            JSON.stringify([...JSON.parse(referrer), document.referrer]),
          );
        } else {
          safeStorage.set('referrer', JSON.stringify([document.referrer]));
        }
      } catch (error) {
        console.error('Cannot correctly set referrer', error);
      }
    }
  }, []);

  const isOverflowVisible = originalPath.includes('/partners/');

  return (
    <Main overflow={isOverflowVisible}>
      <Helmet htmlAttributes={{ lang: language }} />
      <FormattedMetaTags
        titleId="meta_title_default"
        descriptionId="meta_description_default"
      />
      <FormattedOpenGraph
        idOgTitle="og_title_default"
        idOgDescription="og_description_default"
        url={siteUrl}
        path={`/${language}${originalPath || ''}`}
      />
      <HeadScripts />
      <Header locale={language} originalPath={originalPath || ''} />
      {children}
      <Footer locale={language} />
      <Modals language={language} />
    </Main>
  );
};
