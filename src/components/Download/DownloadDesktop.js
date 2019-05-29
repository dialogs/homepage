import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

// import { getOS } from '../../utils/getOS';
import appLinks from '../../constants/links';

export function DownloadDesktop({ isEnterprise }) {
  function handleDownloadAnalytics(event, param) {
    if (typeof window !== 'undefined') {
      window.ga('dlg.send', 'event', 'button', 'download', `${param}`);
      window.yaCounter.reachGoal(`download_${param}`);
    }
  }

  // const os = getOS();
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;

  /*
  function renderDownloadDesktopImage() {
    switch (os) {
      case 'macOS':
      case 'iOS':
        imgSrc = isEnterprise
          ? '/images/download/enterprise-desktop-macos.png'
          : '/images/download/cloud-desktop-macos.png';

        imgSrcSet = isEnterprise
          ? '/images/download/enterprise-desktop-macos@2x.png 2x'
          : '/images/download/cloud-desktop-macos@2x.png 2x';

        return (
          <ImageFormatted
            imgClass="download__desktop-img"
            src={imgSrc}
            srcSet={imgSrcSet}
            altLangId="download_desktop_title"
          />
        );

      case 'Linux':
        imgSrc = isEnterprise
          ? '/images/download/enterprise-desktop-linux.png'
          : '/images/download/cloud-desktop-linux.png';

        imgSrcSet = isEnterprise
          ? '/images/download/enterprise-desktop-linux@2x.png 2x'
          : '/images/download/cloud-desktop-linux@2x.png 2x';

        return (
          <ImageFormatted
            imgClass="download__desktop-img"
            src={imgSrc}
            srcSet={imgSrcSet}
            altLangId="download_desktop_title"
          />
        );

      case 'Windows':
      default:
        return (
          <ImageFormatted
            imgClass="download__desktop-img"
            src={imgSrc}
            srcSet={imgSrcSet}
            altLangId="download_desktop_title"
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
            <FormattedMessage id="download_for" />
            MacOS
          </a>
        );

      case 'Linux':
        return (
          <>
            <a className="button button--default" href={links.linux}>
              <FormattedMessage id="download_for" />
              Linux 32
            </a>
            <a className="button button--default" href={links.linux64}>
              <FormattedMessage id="download_for" />
              Linux 64
            </a>
          </>
        );

      case 'Windows':
      default:
        return (
          <a className="button button--default" href={links.windows}>
            <FormattedMessage id="download_for" />
            Windows
          </a>
        );
    }
  }
  */

  return (
    <StaticQuery
      query={graphql`
        query {
          enterpriseDesktopMacos: file(
            relativePath: { eq: "images/download/enterprise_desktop_macos.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 425) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          cloudDesktopMacos: file(
            relativePath: { eq: "images/download/cloud_desktop_macos.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 425) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ enterpriseDesktopMacos, cloudDesktopMacos }) => {
        return (
          <div className="download__section download__item download__desktop">
            <FormattedMessage id="download_desktop_title">
              {(title) => (
                <h2 className="download__item-title download__desktop-title">
                  {title}
                </h2>
              )}
            </FormattedMessage>
            <div className="download__desktop-pictute">
              <div className="download__desktop-img">
                <FormattedMessage id="download_desktop_title">
                  {(alt) => (
                    <Image
                      fadeIn
                      fluid={
                        isEnterprise
                          ? enterpriseDesktopMacos.childImageSharp.fluid
                          : cloudDesktopMacos.childImageSharp.fluid
                      }
                      alt={alt}
                    />
                  )}
                </FormattedMessage>
              </div>
            </div>
            {/*
          <div className="download__desktop-button-box">
            {renderDownloadDesktopButton()}
          </div>
          */}

            <div className="download__desktop-systems">
              <div className="download__desktop-system">
                <a
                  className="download__item-link"
                  href={links.osx}
                  onClick={(event) =>
                    handleDownloadAnalytics(event, 'dialog_macos')
                  }
                >
                  Mac OS
                </a>
              </div>
              <div className="download__desktop-system">
                <a
                  className="download__item-link"
                  href={links.windows}
                  onClick={(event) =>
                    handleDownloadAnalytics(event, 'dialog_windows')
                  }
                >
                  Windows
                </a>
              </div>
              <div className="download__desktop-system">
                <a
                  className="download__item-link"
                  href={links.linux}
                  onClick={(event) =>
                    handleDownloadAnalytics(event, 'dialog_linux')
                  }
                >
                  Linux 32
                </a>
              </div>
              <div className="download__desktop-system">
                <a
                  className="download__item-link"
                  href={links.linux64}
                  onClick={(event) =>
                    handleDownloadAnalytics(event, 'dialog_linux')
                  }
                >
                  Linux 64
                </a>
              </div>
              {/*
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
        */}
            </div>
          </div>
        );
      }}
    />
  );
}

DownloadDesktop.defaultProps = {
  isEnterprise: false,
};
