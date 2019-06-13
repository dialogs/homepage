import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import appLinks from '../../constants/links';

export function DownloadWeb({ isEnterprise }) {
  function handleDownloadAnalytics(event, param) {
    if (typeof window !== 'undefined') {
      window.ga('dlg.send', 'event', 'button', 'download', `${param}`);
      window.yaCounter.reachGoal(`download_${param}`);
    }
  }

  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;
  return (
    <StaticQuery
      query={graphql`
        query {
          enterpriseWeb: file(
            relativePath: { eq: "images/download/enterprise_web.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          cloudWeb: file(
            relativePath: { eq: "images/download/cloud_web.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ enterpriseWeb, cloudWeb }) => {
        return (
          <div className="download__section download__item download__web">
            <h2 className="download__item-title download__web-title">
              <FormattedMessage id="download_web_title" />
            </h2>
            <div className="download__web-pictute">
              <FormattedMessage
                id={
                  isEnterprise
                    ? 'alt_download_enterprise_web'
                    : 'alt_download_cloud_web'
                }
              >
                {(title) => (
                  <Image
                    className="download__web-img"
                    fadeIn={false}
                    fluid={
                      isEnterprise
                        ? enterpriseWeb.childImageSharp.fluid
                        : cloudWeb.childImageSharp.fluid
                    }
                    alt={title}
                  />
                )}
              </FormattedMessage>
            </div>
            <div className="download__web-button-box">
              <a
                className="button button--default"
                href={links.web}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) =>
                  handleDownloadAnalytics(event, 'dialog_web')
                }
              >
                <FormattedMessage id="start" />
              </a>
            </div>
          </div>
        );
      }}
    />
  );
}

DownloadWeb.defaultProps = {
  isEnterprise: false,
};
