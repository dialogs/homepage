import React from 'react';

import links from '../../constants/links';

export function DownloadWeb() {
  return (
    <section className="download__section download__item download__web">
      <h2 className="download__item-title download__web-title">Web версия</h2>
      <div className="download__web-pictute">
        <img
          className="download__web-img"
          src="/images/download/cloud-web.png"
          srcSet="/images/download/cloud-web@2x.png 2x"
          alt="Web версия демо в облаке"
        />
      </div>
      <div className="download__web-button-box">
        <a className="button button--default" href={links.web}>
          Начать
        </a>
      </div>
    </section>
  );
}
