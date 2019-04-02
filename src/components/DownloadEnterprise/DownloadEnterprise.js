import React from 'react';

import { Section } from '../Section/Section.js';
import { PageHeader } from '../PageHeader/PageHeader';
import { DownloadDesktop } from '../Download/DownloadDesktop';
import { DownloadMobile } from '../Download/DownloadMobile';
import { DownloadWeb } from '../Download/DownloadWeb';

export function DownloadEnterprise() {
  return (
    <Section className="download download__sections">
      <section className="download__section download__intro">
        <PageHeader>dialog Enterprise</PageHeader>
        <div className="download__subtitle">
          Информацию о подключении вы можете получить у своего системного
          администратора или в центре{' '}
          <a className="link--default" href="https://support.dlg.im">
            поддержки клиентов
          </a>
          .
        </div>
      </section>

      <DownloadDesktop isEnterprise />
      <DownloadMobile isEnterprise />
      <DownloadWeb isEnterprise />
    </Section>
  );
}
