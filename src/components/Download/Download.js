import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { DownloadDesktop } from './DownloadDesktop';
import { DownloadMobile } from './DownloadMobile';
import { DownloadWeb } from './DownloadWeb';
import links from '../../constants/links';

import './Download.css';

export function Download({ openOfferModal }) {
  return (
    <Section className="download download__sections">
      <section className="download__section download__intro">
        <PageHeader>
          Демонстрационное облачное приложение платформы dialog
        </PageHeader>
        <div className="download__subtitle">
          Вы можете ознакомиться с функциями платформы в нашем демо-приложении.{' '}
          <button className="link link--default" onClick={openOfferModal}>
            Оставьте заявку
          </button>
          , чтобы получить информацию о подключении платформы.
        </div>
      </section>

      <DownloadDesktop links={links} />
      <DownloadMobile />
      <DownloadWeb />
    </Section>
  );
}
