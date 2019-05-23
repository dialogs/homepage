import React from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

// import { getOS } from '../../utils/getOS';
import appLinks from '../../constants/links';

export function DownloadMobile({ isEnterprise, locale }) {
  function handleDownloadAnalytics(event, param) {
    if (typeof window !== 'undefined') {
      window.ga('dlg.send', 'event', 'button', 'download', `${param}`);
      window.yaCounter.reachGoal(`download_${param}`);
    }
  }

  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;
  const mobileClasses = classnames('download__mobile-items');

  return (
    <section className="download__section download__item download__mobile">
      <h2 className="download__item-title">
        <FormattedMessage id="download_mobile_title" />
      </h2>
      <div className={mobileClasses}>
        <div className="download__mobile-item mobile--ios">
          <div className="download__mobile-pictute">
            <ImageFormatted
              src={
                isEnterprise
                  ? '/images/download/ee-download-iphone-new.png'
                  : '/images/download/cloud-mobile-iphone@2x.png'
              }
              altLangId={
                isEnterprise
                  ? 'alt_download_enterprise_mobile_ios'
                  : 'alt_download_cloud_mobile_ios'
              }
            />
          </div>
          <div className="title">
            <a
              className="download__item-link"
              href={locale === 'ru' ? links.ios : links.ios_en}
              onClick={(event) => handleDownloadAnalytics(event, 'dialog_ios')}
            >
              iPhone / iPad
            </a>
          </div>
          <div className="qr-box">
            <ImageFormatted
              src={
                isEnterprise
                  ? '/images/download/enterprise-iphone-qr.png'
                  : '/images/download/cloud-mobile-iphone-qr.png'
              }
              altLangId={
                isEnterprise
                  ? 'alt_download_enterprise_mobile_ios_qr'
                  : 'alt_download_cloud_mobile_ios_qr'
              }
            />
          </div>
          <a
            className="store-link"
            href={locale === 'ru' ? links.ios : links.ios_en}
            onClick={(event) => handleDownloadAnalytics(event, 'dialog_ios')}
          >
            <ImageFormatted
              src="/images/download/button-app-store.png"
              srcSet="/images/download/button-app-store@2x.png 2x"
              altLangId="alt_download_appstore"
            />
          </a>
        </div>

        <div className="download__mobile-item mobile--android">
          <div className="download__mobile-pictute">
            <ImageFormatted
              src={
                isEnterprise
                  ? '/images/download/ee-download-android-new.png'
                  : '/images/download/cloud-mobile-android@2x.png'
              }
              altLangId={
                isEnterprise
                  ? 'alt_download_enterprise_mobile_android'
                  : 'alt_download_cloud_mobile_android'
              }
            />
          </div>
          <div className="title">
            <a
              className="download__item-link"
              href={links.android}
              onClick={(event) =>
                handleDownloadAnalytics(event, 'dialog_android')
              }
            >
              Android
            </a>
          </div>
          <div className="qr-box">
            <ImageFormatted
              src={
                isEnterprise
                  ? '/images/download/enterprise-android-qr.png'
                  : '/images/download/cloud-mobile-android-qr.png'
              }
              altLangId={
                isEnterprise
                  ? 'alt_download_enterprise_mobile_android_qr'
                  : 'alt_download_cloud_mobile_android_qr'
              }
            />
          </div>
          <a
            className="store-link"
            href={links.android}
            onClick={(event) =>
              handleDownloadAnalytics(event, 'dialog_android')
            }
          >
            <ImageFormatted
              src="/images/download/button-google-play.png"
              srcSet="/images/download/button-google-play@2x.png 2x"
              altLangId="alt_download_googleplay"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

DownloadMobile.defaultProps = {
  isEnterprise: false,
};
