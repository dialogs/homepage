import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { DownloadDesktop } from './DownloadDesktop';
import { DownloadMobile } from './DownloadMobile';
import { DownloadWeb } from './DownloadWeb';

import './Download.css';

export function Download({ openOfferModal, locale }) {
  return (
    <Section className="download download__sections">
      <section className="download__section download__intro">
        <PageHeading>
          <FormattedMessage id="download_header" />
        </PageHeading>
        <div className="download__subtitle">
          <button className="link link--default" onClick={openOfferModal}>
            <FormattedMessage id="download_subtitle_button_text" />
          </button>
          <FormattedMessage id="download_subtitle_after" />
        </div>
      </section>

      <DownloadDesktop />
      <DownloadMobile locale={locale} />
      <DownloadWeb />
    </Section>
  );
}
