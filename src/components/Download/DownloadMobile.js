import React from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { getOS } from '../../utils/getOS';
import appLinks from '../../constants/links';

export function DownloadMobile({ isEnterprise }) {
  const os = getOS();
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;

  const mobileClasses = classnames(
    'download__mobile-items',
    'current--' + os.toLowerCase(),
  );

  return (
    <section className="download__section download__item download__mobile">
      <h2 className="download__item-title">
        <FormattedMessage id="download_mobile_title" />
      </h2>
      <div className={mobileClasses}>
        <div className="download__mobile-item mobile--ios">
          <div className="download__mobile-pictute">
            <img
              src={
                isEnterprise
                  ? '/images/download/enterprise-mobile-iphone@2x.png'
                  : '/images/download/cloud-mobile-iphone@2x.png'
              }
              alt={
                isEnterprise
                  ? 'Мобильное приложение enterprise для iPhone / iPad'
                  : 'Мобильное приложение демо в облаке для iPhone / iPad'
              }
            />
          </div>
          <div className="title">iPhone / iPad</div>
          <div className="qr-box">
            <img
              src={
                isEnterprise
                  ? '/images/download/enterprise-iphone-qr.png'
                  : '/images/download/cloud-mobile-iphone-qr.png'
              }
              alt=""
            />
          </div>
          <a className="store-link" href={links.ios}>
            <img
              src="/images/download/button-app-store.png"
              srcSet="/images/download/button-app-store@2x.png 2x"
              alt="Download on the App Store"
            />
          </a>
        </div>

        <div className="download__mobile-item mobile--android">
          <div className="download__mobile-pictute">
            <img
              src={
                isEnterprise
                  ? '/images/download/enterprise-mobile-android@2x.png'
                  : '/images/download/cloud-mobile-android@2x.png'
              }
              alt={
                isEnterprise
                  ? 'Мобильное приложение enterprise для Android'
                  : 'Мобильное приложение демо в облаке для Android'
              }
            />
          </div>
          <div className="title">Android</div>
          <div className="qr-box">
            <img
              src={
                isEnterprise
                  ? '/images/download/enterprise-android-qr.png'
                  : '/images/download/cloud-mobile-android-qr.png'
              }
              alt=""
            />
          </div>
          <a className="store-link" href={links.android}>
            <img
              src="/images/download/button-google-play.png"
              srcSet="/images/download/button-google-play@2x.png 2x"
              alt="get it on Google Play"
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
