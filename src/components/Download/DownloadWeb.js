import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import appLinks from '../../constants/links';

export function DownloadWeb({ isEnterprise }) {
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;

  return (
    <section className="download__section download__item download__web">
      <h2 className="download__item-title download__web-title">
        <FormattedMessage id="download_web_title" />
      </h2>
      <div className="download__web-pictute">
        <ImageFormatted
          imgClass="download__web-img"
          src={
            isEnterprise
              ? '/images/download/enterprise-web.png'
              : '/images/download/cloud-web.png'
          }
          altLangId={
            isEnterprise
              ? 'alt_download_enterprise_web'
              : 'alt_download_cloud_web'
          }
        />
      </div>
      <div className="download__web-button-box">
        <a className="button button--default" href={links.web}>
          <FormattedMessage id="start" />
        </a>
      </div>
    </section>
  );
}

DownloadWeb.defaultProps = {
  isEnterprise: false,
};
