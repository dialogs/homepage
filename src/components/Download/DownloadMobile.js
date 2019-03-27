import React from 'react';

import links from '../../constants/links';

export function DownloadMobile() {
  return (
    <section className="download__section download__item download__mobile">
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
            <a className="download__item-link" href={links.ios}>
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
            <a className="download__item-link" href={links.android}>
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
    </section>
  );
}
