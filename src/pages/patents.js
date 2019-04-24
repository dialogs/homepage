import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
// import { PartnersTechnological } from '../components/PartnersTechnological/PartnersTechnological';

export default () => {
  return (
    <Container>
      <FormattedMetaTags
        titleId="meta_title_patents"
        descriptionId="meta_description_patents"
      />
      <FormattedOpenGraph idOgTitle="meta_title_patents" />

      <div className="license__column-content">
        <section className="license__section license__intro">
          <PageHeader>
            <FormattedMessage id="licenses_licenses" />
          </PageHeader>
          <div className="license__intro-text">
            <FormattedMessage id="licenses_prodiction_process" />
          </div>
        </section>

        <section className="license__section license__photos license__photos--patents">
          <div className="license__photos-title">
            <FormattedMessage id="licenses_company_is_the_holder" />
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
            <FormattedMessage id="licenses_required_licenses" />
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
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSB" />
                  </span>
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
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSTEK" />
                  </span>
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
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSTEK_TZKI" />
                  </span>
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
          <div className="license__assoc-title">
            <FormattedMessage id="licenses_associations" />
          </div>
          <ul>
            <li>
              <FormattedMessage id="licenses_messenger_complies" />
            </li>
            <li>
              <FormattedMessage id="licenses_member" />
            </li>
            <li>
              <FormattedMessage id="licenses_ooo" />
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
};
