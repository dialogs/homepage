import React from 'react';
import UAParser from 'ua-parser-js';

import { Section } from '../Section/Section';

function getOS(o) {
  const userAgent = new UAParser(navigator.userAgent);
  const os = userAgent.getOS();

  switch (os.name) {
    case 'Mint':
    case 'Mageia':
    case 'VectorLinux':
    case 'Joli':
    case 'Ubuntu':
    case 'Debian':
    case 'SUSE':
    case 'Gentoo':
    case 'Arch':
    case 'Slackware':
    case 'Fedora':
    case 'Mandriva':
    case 'CentOS':
    case 'PCLinuxOS':
    case 'RedHat':
    case 'Zenwalk':
    case 'Linpus':
    case 'Linux':
    case 'Hurd':
      return 'Linux';

    case 'Mac OS':
      return 'macOS';

    case 'Windows':
    default:
      return 'Windows';
  }
}

export function DownloadDesktop() {
  const os = getOS();
  console.log(os);

  function renderDownloadDesktopButton() {
    switch (os) {
      case 'macOS':
        return (
          <a className="button button--default" href="<%=links.osx %>">
            Скачать для Windows
          </a>
        );

      case 'Linux':
        return (
          <>
            <a className="button button--default" href="<%=links.linux %>">
              Скачать для Linux 32
            </a>
            <a className="button button--default" href="<%=links.linux64 %>">
              Скачать для Linux 64
            </a>
          </>
        );

      case 'Windows':
      default:
        return (
          <a className="button button--default" href="<%=links.osx %>">
            Скачать для MacOS
          </a>
        );
    }
  }

  return (
    <Section className="download__section download__item download__desktop">
      <h2 className="download__item-title download__desktop-title">
        Десктопное приложение
      </h2>
      <div className="download__desktop-pictute">
        <img
          className="download__desktop-img"
          src="/images/download/cloud-desktop.png"
          srcSet="/images/download/cloud-desktop@2x.png 2x"
          alt="Десктопное приложение демо в облаке"
        />
      </div>
      <div className="download__desktop-button-box">
        {renderDownloadDesktopButton()}
      </div>
      <div className="download__desktop-systems">
        {os !== 'macOS' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href="<%=links.osc %>">
              Mac OS
            </a>
          </div>
        )}
        {os !== 'Windows' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href="<%=links.windows %>">
              Windows
            </a>
          </div>
        )}
        {os !== 'Linux' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href="<%=links.linux %>">
              Linux 32
            </a>
          </div>
        )}
        {os !== 'Linux' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href="<%=links.linux64 %>">
              Linux 64
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
