import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section.js';
import { PageHeader } from '../PageHeader/PageHeader';
import { DownloadDesktop } from '../Download/DownloadDesktop';
import { DownloadMobile } from '../Download/DownloadMobile';
import { DownloadWeb } from '../Download/DownloadWeb';

export function DownloadEnterprise({ locale }) {
  return (
    <Section className="download download__sections">
      <section className="download__section download__intro">
        <PageHeader>dialog Enterprise</PageHeader>
        <div className="download__subtitle">
          <FormattedMessage id="download_enterprise_subtitle_before" />
          <a className="link--default" href="https://support.dlg.im">
            <FormattedMessage id="download_enterprise_subtitle_link" />
          </a>
          . <FormattedHTMLMessage id="download_enterprise_subtitle_2" />
        </div>
      </section>

      <DownloadDesktop isEnterprise />
      <DownloadMobile isEnterprise locale={locale} />
      <DownloadWeb isEnterprise />
    </Section>
  );
}
