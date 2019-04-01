import React from 'react';

import { getOS } from '../../utils/getOS';
import appLinks from '../../constants/links';

export function DownloadDesktop({ isEnterprise }) {
  const os = getOS();
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;

  function renderDownloadDesktopImage() {
    switch (os) {
      case 'macOS':
      case 'iOS':
        return (
          <img
            className="download__desktop-img"
            src={
              isEnterprise
                ? '/images/download/enterprise-desktop-macos.png'
                : '/images/download/cloud-desktop-macos.png'
            }
            srcSet={
              isEnterprise
                ? '/images/download/enterprise-desktop-macos@2x.png 2x'
                : '/images/download/cloud-desktop-macos@2x.png 2x'
            }
            alt={
              isEnterprise
                ? 'Десктопное приложение enterprise для MacOS'
                : 'Десктопное приложение демо в облаке для MacOS'
            }
          />
        );

      case 'Linux':
        return (
          <img
            className="download__desktop-img"
            src={
              isEnterprise
                ? '/images/download/enterprise-desktop-linux.png'
                : '/images/download/cloud-desktop-linux.png'
            }
            srcSet={
              isEnterprise
                ? '/images/download/enterprise-desktop-linux@2x.png 2x'
                : '/images/download/cloud-desktop-linux@2x.png 2x'
            }
            alt={
              isEnterprise
                ? 'Десктопное приложение enterprise для Linux'
                : 'Десктопное приложение демо в облаке для Linux'
            }
          />
        );

      case 'Windows':
      default:
        return (
          <img
            className="download__desktop-img"
            src={
              isEnterprise
                ? '/images/download/enterprise-desktop-windows.png'
                : '/images/download/cloud-desktop-windows.png'
            }
            srcSet={
              isEnterprise
                ? '/images/download/enterprise-desktop-windows@2x.png 2x'
                : '/images/download/cloud-desktop-windows@2x.png 2x'
            }
            alt={
              isEnterprise
                ? 'Десктопное приложение enterprise для Windows'
                : 'Десктопное приложение демо в облаке для Windows'
            }
          />
        );
    }
  }

  function renderDownloadDesktopButton() {
    switch (os) {
      case 'macOS':
      case 'iOS':
        return (
          <a className="button button--default" href={links.osx}>
            Скачать для MacOS
          </a>
        );

      case 'Linux':
        return (
          <>
            <a className="button button--default" href={links.linux}>
              Скачать для Linux 32
            </a>
            <a className="button button--default" href={links.linux64}>
              Скачать для Linux 64
            </a>
          </>
        );

      case 'Windows':
      default:
        return (
          <a className="button button--default" href={links.windows}>
            Скачать для Windows
          </a>
        );
    }
  }

  return (
    <div className="download__section download__item download__desktop">
      <h2 className="download__item-title download__desktop-title">
        Десктопное приложение
      </h2>
      <div className="download__desktop-pictute">
        {renderDownloadDesktopImage()}
      </div>

      <div className="download__desktop-button-box">
        {renderDownloadDesktopButton()}
      </div>

      <div className="download__desktop-systems">
        {os !== 'macOS' && os !== 'iOS' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href={links.osx}>
              Mac OS
            </a>
          </div>
        )}
        {os !== 'Windows' && os !== 'Android' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href={links.windows}>
              Windows
            </a>
          </div>
        )}
        {os !== 'Linux' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href={links.linux}>
              Linux 32
            </a>
          </div>
        )}
        {os !== 'Linux' && (
          <div className="download__desktop-system">
            <a className="download__item-link" href={links.linux64}>
              Linux 64
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

DownloadDesktop.defaultProps = {
  isEnterprise: false,
};
