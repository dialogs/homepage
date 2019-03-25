import React from 'react';

import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';

export default () => (
  <Page>
    <Container>
      <section className="download download__sections">
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

        <section className="download__section download__item download__desktop">
          <h2 className="download__item-title download__desktop-title">
            Десктопное приложение
          </h2>
          <div className="download__desktop-pictute">
            <img
              className="download__desktop-img"
              src="/images/download/enterprise-desktop.png"
              srcSet="/images/download/enterprise-desktop@2x.png 2x"
              alt="Десктопное приложение enterprise"
            />
          </div>
          <div className="download__desktop-button-box">
            <a className="button button--default" href="<%=links.osx_ee %>">
              Скачать для MacOS
            </a>
          </div>
          <div className="download__desktop-systems">
            <div className="download__desktop-system">
              <a className="download__item-link" href="<%=links.windows_ee %>">
                Windows
              </a>
            </div>
            <div className="download__desktop-system">
              <a className="download__item-link" href="<%=links.linux_ee %>">
                Linux 32
              </a>
            </div>
            <div className="download__desktop-system">
              <a className="download__item-link" href="<%=links.linux64_ee %>">
                Linux 64
              </a>
            </div>
          </div>
        </section>

        <section className="download__section download__item download__mobile">
          <h2 className="download__item-title download__mobile-title">
            Мобильное приложение
          </h2>
          <div className="download__mobile-items">
            <div className="download__mobile-item">
              <div className="download__mobile-pictute">
                <img
                  className="download__mobile-img"
                  src="/images/download/enterprise-mobile-iphone.png"
                  srcSet="/images/download/enterprise-mobile-iphone@2x.png 2x"
                  alt="Мобильное приложение enterprise iPhone / iPad"
                />
              </div>
              <div className="download__mobile-link-box">
                <a className="download__item-link" href="/404">
                  iPhone / iPad
                </a>
              </div>
              <div className="download__mobile-qr-box">
                <img
                  className="download__mobile-qr"
                  src="/images/download/enterprise-mobile-iphone-qr.png"
                  alt=""
                />
              </div>
            </div>
            <div className="download__mobile-item">
              <div className="download__mobile-pictute">
                <img
                  className="download__mobile-img"
                  src="/images/download/enterprise-mobile-android.png"
                  srcSet="/images/download/enterprise-mobile-android@2x.png 2x"
                  alt="Мобильное приложение enterprise Android"
                />
              </div>
              <div className="download__mobile-link-box">
                <a className="download__item-link" href="/404">
                  Android
                </a>
              </div>
              <div className="download__mobile-qr-box">
                <img
                  className="download__mobile-qr"
                  src="/images/download/enterprise-mobile-android-qr.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="download__section download__item download__web">
          <h2 className="download__item-title download__web-title">
            Web версия
          </h2>
          <div className="download__web-pictute">
            <img
              className="download__web-img"
              src="/images/download/enterprise-web.png"
              srcSet="/images/download/enterprise-web@2x.png 2x"
              alt="Web версия enterprise"
            />
          </div>
          <div className="download__web-button-box">
            <a className="button button--default" href="<%=links.web_ee %>">
              Начать
            </a>
          </div>
        </section>
      </section>
    </Container>
  </Page>
);
