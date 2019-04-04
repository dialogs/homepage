import React from 'react';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
// import { PartnersTechnological } from '../components/PartnersTechnological/PartnersTechnological';

export default () => {
  return (
    <Container>
      <div className="license__column-content">
        <section className="license__section license__intro">
          <PageHeader>Патенты и лицензии</PageHeader>
          <div className="license__intro-text">
            Процесс производства программного обеспечения основан на практиках
            дизайн-мышления, принципах архитектурного единства, положениях и
            принципах манифеста Agile и практиках DevOps. Он определяется
            внутренним регламентом процесса проектирования и внедрения
            технологий. Для поддержки и устранения выявленных ошибок в
            программном обеспечении внедрён процесс управления инцидентами и
            запросами обслуживания.
          </div>
        </section>

        <section className="license__section license__photos license__photos--patents">
          <div className="license__photos-title">
            Компания является правообладателем 5 программных продуктов, которые
            зарегистрированы в Роспатенте
          </div>
          <div className="license__photos-list">
            <div className="license__photos-item license--dialog-server">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-server.jpg"
                alt="Dialog server"
              />
              <div className="license__photos-link-box">
                <a
                  href="/images/patent-dialog-server.jpg"
                  className="link--download license__photos-link"
                  download
                >
                  <span className="link--download__text">Dialog server</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-core">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-core.jpg"
                alt="Dialog Core"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-core.jpg"
                  download
                >
                  <span className="link--download__text">Dialog Core</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-android-sdk">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-android-sdk.jpg"
                alt="Dialog Android SDK"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-android-sdk.jpg"
                  download
                >
                  <span className="link--download__text">
                    Dialog Android SDK
                  </span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-ios-sdk">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-ios-sdk.jpg"
                alt="Dialog iOS SDK"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-ios-sdk.jpg"
                  download
                >
                  <span className="link--download__text">Dialog iOS SDK</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-web-sdk">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-web-sdk.jpg"
                alt="Dialog WEB SDK"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-web-sdk.jpg"
                  download
                >
                  <span className="link--download__text">Dialog WEB SDK</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            {/*
            <div className="license__photos-item license--dialog-enterprise">
              <img
                className="license__photos-image"
                src="/images/patent-dialog-web-sdk.jpg"
                alt="Dialog enterprise"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-web-sdk.jpg"
                  download
                >
                  <span className="link--download__text">
                    Dialog enterprise
                  </span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            */}
          </div>
        </section>

        <section className="license__section license__photos license__photos--fstek">
          <div className="license__photos-title">
            Компания имеет необходимую квалификацию и лицензии ФСТЭК России и
            ФСБ России
          </div>
          <div className="license__photos-list">
            <div className="license__photos-item">
              <img
                className="license__photos-image"
                src="/images/license-fsb.jpg"
                alt="ФСБ"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/license-fsb.jpg"
                  download
                >
                  <span className="link--download__text">ФСБ</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>

            <div className="license__photos-item">
              <img
                className="license__photos-image"
                src="/images/fstek-1.jpg"
                alt="ФСБ СКЗИ"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/fstek-1.jpg"
                  download
                >
                  <span className="link--download__text">ФСТЭК</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item">
              <img
                className="license__photos-image"
                src="/images/fstek-3.jpg"
                alt="ФСБ ТЗКИ"
              />
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/fstek-3.jpg"
                  download
                >
                  <span className="link--download__text">ФСБ ТЗКИ</span>
                  <img
                    src="/images/svg-icons/arrow-download.svg"
                    alt=""
                    className="link--download__icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="license__section license__assoc box--prefooter">
          <div className="license__assoc-title">Реестры и ассоциации</div>
          <ul>
            <li>
              Мессенджер dialog соответствует требованиям Единого реестра
              российских программ для электронных вычислительных машин и баз
              данных и состоит в реестре отечественного ПО.
            </li>
            <li>
              Компания является членом Ассоциации документальной электросвязи
              (АДЭ).
            </li>
            <li>
              ООО “Диалог” входит в реестр Организаторов Распространения
              Информации (ОРИ) Роскомнадзор.
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
};
