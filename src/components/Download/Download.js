import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { DownloadDesktop } from './DownloadDesktop';
import { DownloadMobile } from './DownloadMobile';
import { DownloadWeb } from './DownloadWeb';

export function Download({ openOfferModal }) {
  return (
    <Section className="download__sections">
      <section className="download__section download__intro">
        <PageHeader>
          Демонстрационное облачное приложение платформы dialog
        </PageHeader>
        <div className="download__intro-text">
          Вы можете ознакомиться с функциями платформы в нашем демо-приложении.{' '}
          <button className="link link--default" onClick={openOfferModal}>
            Оставьте заявку
          </button>
          , чтобы получить информацию о подключении платформы.
        </div>
      </section>

      <DownloadDesktop />
      <DownloadMobile />
      <DownloadWeb />
    </Section>
  );
}
