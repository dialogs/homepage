import React from 'react';

import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { DownloadDesktop } from '../../components/DownloadDesktop/DownloadDesktop';

export default () => {
  return (
    <Page>
      <Container>
        <section className="download">
          <div className="download__sections">
            <div className="download__section download__intro">
              <PageHeader>
                Демонстрационное облачное приложение платформы dialog
              </PageHeader>
              <div className="download__intro-text">
                Вы можете ознакомиться с функциями платформы в нашем
                демо-приложении.{' '}
                <a className="link--default triggerModalWindow" href="/404">
                  Оставьте заявку
                </a>
                , чтобы получить информацию о подключении платформы.
              </div>
            </div>

            <DownloadDesktop />

            <div className="download__section download__item download__mobile">
              <h2 className="download__item-title download__mobile-title">
                Мобильное приложение
              </h2>
              <div className="download__mobile-items">
                <div className="download__mobile-item">
                  <div className="download__mobile-pictute">
                    <img
                      className="download__mobile-img"
                      src="/images/download/cloud-mobile-iphone.png"
                      srcSet="/images/download/cloud-mobile-iphone@2x.png 2x"
                      alt="Мобильное приложение демо в облаке iPhone / iPad"
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
                      src="/images/download/cloud-mobile-iphone-qr.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="download__mobile-item">
                  <div className="download__mobile-pictute">
                    <img
                      className="download__mobile-img"
                      src="/images/download/cloud-mobile-android.png"
                      srcSet="/images/download/cloud-mobile-android@2x.png 2x"
                      alt="Мобильное приложение демо в облаке Android"
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
                      src="/images/download/cloud-mobile-android-qr.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="download__section download__item download__web">
              <h2 className="download__item-title download__web-title">
                Web версия
              </h2>
              <div className="download__web-pictute">
                <img
                  className="download__web-img"
                  src="/images/download/cloud-web.png"
                  srcSet="/images/download/cloud-web@2x.png 2x"
                  alt="Web версия демо в облаке"
                />
              </div>
              <div className="download__web-button-box">
                <a className="button button--default" href="<%=links.web %>">
                  Начать
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Page>
  );
};
