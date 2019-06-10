import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import ImageFormatted from '../components/ImageFormatted';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
// import { PartnersTechnological } from '../components/PartnersTechnological/PartnersTechnological';

export default ({ pageContext: { locale, url, originalPath } }) => {
  return (
    <Container>
      <FormattedMetaTags
        titleId="meta_title_patents"
        descriptionId="meta_description_patents"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_patents"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <div className="license__column-content">
        <section className="license__section license__intro">
          <PageHeader>
            <FormattedMessage id="licenses_licenses" />
          </PageHeader>
          <div className="license__intro-text">
            {/*<FormattedMessage id="licenses_prodiction_process" />*/}
          </div>
        </section>

        <section className="license__section license__photos license__photos--patents">
          <div className="license__photos-title">
            <FormattedMessage id="licenses_company_is_the_holder" />
          </div>
          <div className="license__photos-list">
            <div className="license__photos-item license--dialog-server">
              <a href="/images/patent-dialog-server.jpg" download>
                <img
                  className="license__photos-image"
                  src="/images/patent-dialog-server.jpg"
                  alt="Dialog server"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  href="/images/patent-dialog-server.jpg"
                  className="link--download license__photos-link"
                  download
                >
                  <span className="link--download__text">Dialog server</span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-core">
              <a href="/images/patent-dialog-core.jpg" download>
                <img
                  className="license__photos-image"
                  src="/images/patent-dialog-core.jpg"
                  alt="Dialog Core"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-core.jpg"
                  download
                >
                  <span className="link--download__text">Dialog Core</span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-android-sdk">
              <a href="/images/patent-dialog-android-sdk.jpg" download>
                <img
                  className="license__photos-image"
                  src="/images/patent-dialog-android-sdk.jpg"
                  alt="Dialog Android SDK"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-android-sdk.jpg"
                  download
                >
                  <span className="link--download__text">
                    Dialog Android SDK
                  </span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-ios-sdk">
              <a href="/images/patent-dialog-ios-sdk.jpg" download>
                <img
                  className="license__photos-image"
                  src="/images/patent-dialog-ios-sdk.jpg"
                  alt="Dialog iOS SDK"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-ios-sdk.jpg"
                  download
                >
                  <span className="link--download__text">Dialog iOS SDK</span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item license--dialog-web-sdk">
              <a href="/images/patent-dialog-web-sdk.jpg" download>
                <img
                  className="license__photos-image"
                  src="/images/patent-dialog-web-sdk.jpg"
                  alt="Dialog WEB SDK"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/patent-dialog-web-sdk.jpg"
                  download
                >
                  <span className="link--download__text">Dialog WEB SDK</span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
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
              <a href="/images/license-fsb.jpg" download>
                <ImageFormatted
                  imgClass="license__photos-image"
                  src="/images/license-fsb.jpg"
                  altLangId="licenses_FSB"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/license-fsb.jpg"
                  download
                >
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSB" />
                  </span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>

            <div className="license__photos-item">
              <a href="/images/fstek-1.jpg" download>
                <ImageFormatted
                  imgClass="license__photos-image"
                  src="/images/fstek-1.jpg"
                  altLangId="licenses_FSTEK"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/fstek-1.jpg"
                  download
                >
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSTEK" />
                  </span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
                  />
                </a>
              </div>
            </div>
            <div className="license__photos-item">
              <a href="/images/fstek-3.jpg" download>
                <ImageFormatted
                  imgClass="license__photos-image"
                  src="/images/fstek-3.jpg"
                  altLangId="licenses_FSTEK"
                />
              </a>
              <div className="license__photos-link-box">
                <a
                  className="link--download license__photos-link"
                  href="/images/fstek-3.jpg"
                  download
                >
                  <span className="link--download__text">
                    <FormattedMessage id="licenses_FSTEK" />
                  </span>
                  <ImageFormatted
                    imgClass="link--download__icon"
                    src="/images/svg-icons/arrow-download.svg"
                    altLangId="alt_download"
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
