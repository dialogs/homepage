import React from 'react';
import { styled } from 'astroturf';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { Section } from '../Section/Section';
import appLinks from '../../constants/links';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';

const DownloadMobileSection = styled(Section)`
  @import '../../styles/variables.css';

  padding-top: 40px;
  flex: 0 0 50%;

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-primary);
  }

  @media (--mobile-viewport) {
    position: relative;
    flex: 0 0 auto;
    padding-bottom: 30px;

    &:after {
      left: calc(-1 * var(--margin-container-side));
      right: calc(-1 * var(--margin-container-side));
    }
  }

  @media (--tablet-viewport) {
    flex: 0 0 50%;
    padding-left: 64px;

    &:after {
      left: calc(50% - 30px);
    }
  }

  @media (--tablet-landscape-viewport) {
    padding-left: 80px;

    &:after {
      left: calc(50% - 32px);
    }
  }

  @media (--desktop-viewport) {
    padding-left: 120px;

    &:after {
      left: calc(50% - 60px);
    }
  }
`;

const DownloadMobileDeviceList = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media (--mobile-viewport) {
    flex-flow: column nowrap;
  }

  @media (--tablet-viewport) {
    padding-top: 20px;
  }

  @media (--tablet-landscape-viewport) {
    padding-top: 30px;
  }

  @media (--desktop-viewport) {
    padding-top: 36px;
  }
`;

const DownloadMobileDevice = styled.div`
  @import '../../styles/variables.css';

  text-align: center;
  line-height: 0;

  @media (--mobile-viewport) {
    width: 100%;
    padding: 50px 0;
  }

  @media (--tablet-viewport) {
    flex: 0 0 82px;
    width: 82px;

    &:first-child {
      margin-right: 36px;
    }
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 110px;
    width: 110px;

    &:first-child {
      margin-right: 46px;
    }
  }

  @media (--laptop-viewport) {
    flex: 0 0 140px;
    width: 140px;

    &:first-child {
      margin-right: 80px;
    }
  }
`;

const DownloadMobileDeviceImage = styled(Image)`
  @import '../../styles/variables.css';

  width: 100%;

  @media (--mobile-viewport) {
    width: 80%;
    max-width: 200px;
    margin: 0 auto;
  }

  @media (--tablet-viewport) {
    margin-bottom: 38px;
  }

  @media (--tablet-landscape-viewport) {
    margin-bottom: 56px;
  }
`;

const MarketTextLink = styled(Text)`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    display: none;
  }
`;

const QRCodeImage = styled.img`
  @import '../../styles/variables.css';

  margin-top: 30px;
  width: 100%;

  @media (--mobile-viewport) {
    display: none;
  }
`;

const MarketLink = styled.a`
  @import '../../styles/variables.css';
  display: inline-block;
  line-height: 0;
  display: none;
  margin-top: 30px;

  & img {
    max-height: 50px;
  }

  @media (--mobile-viewport) {
    display: block;
  }
`;

export function DownloadMobile({ isEnterprise, language }) {
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;
  const {
    enterprisePhoneIos,
    cloudPhoneIos,
    enterprisePhoneAndroid,
    cloudPhoneAndroid,
  } = useStaticQuery(graphql`
    query {
      enterprisePhoneIos: file(
        relativePath: { eq: "images/download/enterprise_iphone.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cloudPhoneIos: file(
        relativePath: { eq: "images/download/cloud_iphone.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      enterprisePhoneAndroid: file(
        relativePath: { eq: "images/download/enterprise_android.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cloudPhoneAndroid: file(
        relativePath: { eq: "images/download/cloud_android.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  function handleDownloadClick(event, param) {
    if (typeof window !== 'undefined') {
      window.ga &&
        window.ga('dlg.send', 'event', 'button', 'download', `${param}`);
      window.yaCounter && window.yaCounter.reachGoal(`download_${param}`);
    }
  }

  return (
    <DownloadMobileSection>
      <FormattedMessage id="download.mobile.header">
        {(title) => <Heading level="3">{title}</Heading>}
      </FormattedMessage>
      <DownloadMobileDeviceList>
        <DownloadMobileDevice>
          <FormattedMessage
            id={
              isEnterprise
                ? 'download.enterprise.appstore'
                : 'download.cloud.appstore'
            }
          >
            {(alt) => (
              <>
                <DownloadMobileDeviceImage
                  fadeIn={false}
                  fluid={
                    isEnterprise
                      ? enterprisePhoneIos.childImageSharp.fluid
                      : cloudPhoneIos.childImageSharp.fluid
                  }
                  alt={alt}
                />
                <MarketTextLink bold inline>
                  <UnderlineLink
                    direction="right"
                    href={language === 'ru' ? links.ios : links.ios_en}
                    onClick={(event) =>
                      handleDownloadClick(event, 'dialog_ios')
                    }
                  >
                    iOS
                  </UnderlineLink>
                </MarketTextLink>
                <QRCodeImage
                  src={
                    isEnterprise
                      ? '/images/download/enterprise_appstore.svg'
                      : '/images/download/cloud_appstore.svg'
                  }
                  alt={alt}
                />
                <MarketLink
                  href={language === 'ru' ? links.ios : links.ios_en}
                  onClick={(event) => handleDownloadClick(event, 'dialog_ios')}
                >
                  <img
                    alt={alt}
                    width="150"
                    src={`/images/app-store/${language}.svg`}
                  />
                </MarketLink>
              </>
            )}
          </FormattedMessage>
        </DownloadMobileDevice>
        <DownloadMobileDevice>
          <FormattedMessage
            id={
              isEnterprise
                ? 'download.enterprise.googleplay'
                : 'download.cloud.googleplay'
            }
          >
            {(alt) => (
              <>
                <DownloadMobileDeviceImage
                  fadeIn={false}
                  fluid={
                    isEnterprise
                      ? enterprisePhoneAndroid.childImageSharp.fluid
                      : cloudPhoneAndroid.childImageSharp.fluid
                  }
                  alt={alt}
                />
                <MarketTextLink bold inline>
                  <UnderlineLink
                    direction="right"
                    href={links.android}
                    onClick={(event) =>
                      handleDownloadClick(event, 'dialog_android')
                    }
                  >
                    Android
                  </UnderlineLink>
                </MarketTextLink>
                <QRCodeImage
                  src={
                    isEnterprise
                      ? '/images/download/enterprise_playmarket.svg'
                      : '/images/download/cloud_playmarket.svg'
                  }
                  alt={alt}
                />

                <MarketLink
                  href={links.android}
                  onClick={(event) =>
                    handleDownloadClick(event, 'dialog_android')
                  }
                >
                  <img
                    alt={alt}
                    width="166"
                    src={`/images/google-play/${language}.png`}
                  />
                </MarketLink>
              </>
            )}
          </FormattedMessage>
        </DownloadMobileDevice>
      </DownloadMobileDeviceList>
    </DownloadMobileSection>
  );
}

DownloadMobile.defaultProps = {
  isEnterprise: false,
};
