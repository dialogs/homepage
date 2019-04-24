import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { DownloadDesktop } from './DownloadDesktop';
import { DownloadMobile } from './DownloadMobile';
import { DownloadWeb } from './DownloadWeb';

import './Download.css';

export function Download({ openOfferModal }) {
  return (
    <Section className="download download__sections">
      <section className="download__section download__intro">
        <PageHeader>
          <FormattedMessage id="download_header" />
        </PageHeader>
        <div className="download__subtitle">
          <button className="link link--default" onClick={openOfferModal}>
            <FormattedMessage id="download_subtitle_button_text" />
          </button>
          <FormattedMessage id="download_subtitle_after" />
        </div>
      </section>

      <DownloadDesktop />
      <DownloadMobile />
      <DownloadWeb />
    </Section>
  );
}
