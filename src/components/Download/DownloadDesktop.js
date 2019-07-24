import React from 'react';
import { styled } from 'astroturf';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Heading } from '../Heading/Heading';
import { getOS } from '../../utils/getOS';
import { Section } from '../Section/Section';
import { Text } from '../Text/Text';
import appLinks from '../../constants/links';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { LinkButton } from '../Button/LinkButton';

const DownloadDesktopSection = styled(Section)`
  @import '../../styles/variables.css';

  padding-top: 40px;
  flex: 0 0 50%;

  @media (--mobile-viewport) {
    flex: 0 0 auto;
    padding-bottom: 50px;
  }
`;

const DownloadDesktopImage = styled(Image)`
  @import '../../styles/variables.css';

  width: 100%;

  @media (--mobile-viewport) {
    max-width: 400px;
  }

  @media (--tablet-viewport) {
    margin-left: -38px;
    max-width: 300px;
  }

  @media (--tablet-landscape-viewport) {
    margin-left: -54px;
    max-width: 425px;
  }

  @media (--laptop-viewport) {
    margin-left: -64px;
    max-width: 520px;
  }
`;

const DownloadDesktopButtonWrapper = styled.div`
  @import '../../styles/variables.css';

  @media (--tablet-viewport) {
    width: calc(300px - (38px * 2));
  }

  @media (--tablet-landscape-viewport) {
    width: calc(425px - (54px * 2));
  }

  @media (--laptop-viewport) {
    width: calc(520px - (64px * 2));
  }
`;

const DownloadDesktopButton = styled(LinkButton)`
  @import '../../styles/variables.css';

  @media (--tablet-viewport) {
    width: 100%;
  }
`;

const DownloadDesktopLinksBlock = styled.div`
  @import '../../styles/variables.css';

  padding-top: 30px;

  @media (--tablet-viewport) {
    width: calc(300px - (38px * 2));
    text-align: center;
  }

  @media (--tablet-landscape-viewport) {
    width: calc(425px - (54px * 2));
  }

  @media (--laptop-viewport) {
    width: calc(520px - (64px * 2));
  }
`;

const DownloadDesktopLink = styled(UnderlineLink)`
  @import '../../styles/variables.css';

  margin: 10px 10px 0;
`;

export function DownloadDesktop({ isEnterprise }) {
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;
  const os = getOS();
  const {
    enterpriseDesktopMacos,
    cloudDesktopMacos,
    enterpriseDesktopLinux,
    cloudDesktopLinux,
    enterpriseDesktopWindows,
    cloudDesktopWindows,
  } = useStaticQuery(graphql`
    query {
      enterpriseDesktopMacos: file(
        relativePath: { eq: "images/download/enterprise_desktop_macos.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cloudDesktopMacos: file(
        relativePath: { eq: "images/download/cloud_desktop_macos.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      enterpriseDesktopLinux: file(
        relativePath: { eq: "images/download/enterprise_desktop_linux.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cloudDesktopLinux: file(
        relativePath: { eq: "images/download/cloud_desktop_linux.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      enterpriseDesktopWindows: file(
        relativePath: { eq: "images/download/enterprise_desktop_windows.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cloudDesktopWindows: file(
        relativePath: { eq: "images/download/cloud_desktop_windows.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 520) {
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

  function getDesktopImage() {
    if (isEnterprise) {
      switch (os) {
        case 'macOS':
        case 'iOS':
          return enterpriseDesktopMacos.childImageSharp.fluid;
        case 'Linux':
          return enterpriseDesktopLinux.childImageSharp.fluid;
        case 'Windows':
        default:
          return enterpriseDesktopWindows.childImageSharp.fluid;
      }
    }

    switch (os) {
      case 'macOS':
      case 'iOS':
        return cloudDesktopMacos.childImageSharp.fluid;
      case 'Linux':
        return cloudDesktopLinux.childImageSharp.fluid;
      case 'Windows':
      default:
        return cloudDesktopWindows.childImageSharp.fluid;
    }
  }

  function renderDownloadButton() {
    switch (os) {
      case 'macOS':
      case 'iOS':
        return (
          <FormattedMessage
            id="download.desktop.button"
            values={{ os: 'macOS' }}
          >
            {(text) => (
              <DownloadDesktopButton
                href={links.osx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) =>
                  handleDownloadClick(event, 'dialog_windows')
                }
              >
                {text}
              </DownloadDesktopButton>
            )}
          </FormattedMessage>
        );

      case 'Linux':
        return (
          <>
            <FormattedMessage
              id="download.desktop.button"
              values={{ os: 'Linux 32' }}
            >
              {(text) => (
                <DownloadDesktopButton
                  href={links.linux}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) =>
                    handleDownloadClick(event, 'dialog_linux')
                  }
                >
                  {text}
                </DownloadDesktopButton>
              )}
            </FormattedMessage>
            <br />
            <br />
            <FormattedMessage
              id="download.desktop.button"
              values={{ os: 'Linux 64' }}
            >
              {(text) => (
                <DownloadDesktopButton
                  href={links.linux64}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) =>
                    handleDownloadClick(event, 'dialog_linux')
                  }
                >
                  {text}
                </DownloadDesktopButton>
              )}
            </FormattedMessage>
          </>
        );

      case 'Windows':
      default:
        return (
          <FormattedMessage
            id="download.desktop.button"
            values={{ os: 'Windows' }}
          >
            {(text) => (
              <DownloadDesktopButton
                fill
                href={links.windows}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => handleDownloadClick(event, 'dialog_macos')}
              >
                {text}
              </DownloadDesktopButton>
            )}
          </FormattedMessage>
        );
    }
  }

  return (
    <DownloadDesktopSection>
      <FormattedMessage id="download.desktop.header">
        {(title) => <Heading level="3">{title}</Heading>}
      </FormattedMessage>
      <FormattedMessage id="download.desktop.header">
        {(alt) => (
          <DownloadDesktopImage
            fadeIn={false}
            fluid={getDesktopImage()}
            alt={alt}
          />
        )}
      </FormattedMessage>
      <DownloadDesktopButtonWrapper>
        {renderDownloadButton()}
      </DownloadDesktopButtonWrapper>
      <Text bold inline>
        <DownloadDesktopLinksBlock>
          {os !== 'macOS' && os !== 'iOS' && (
            <DownloadDesktopLink
              direction="right"
              download
              href={links.osx}
              onClick={(event) => handleDownloadClick(event, 'dialog_macos')}
            >
              macOS
            </DownloadDesktopLink>
          )}
          {os !== 'Windows' && os !== 'Android' && (
            <DownloadDesktopLink
              direction="right"
              download
              href={links.windows}
              onClick={(event) => handleDownloadClick(event, 'dialog_windows')}
            >
              Windows
            </DownloadDesktopLink>
          )}
          {os !== 'Linux' && (
            <>
              <DownloadDesktopLink
                direction="right"
                download
                href={links.linux}
                onClick={(event) => handleDownloadClick(event, 'dialog_linux')}
              >
                Linux 32
              </DownloadDesktopLink>
              <DownloadDesktopLink
                direction="right"
                download
                href={links.linux64}
                onClick={(event) => handleDownloadClick(event, 'dialog_linux')}
              >
                Linux 64
              </DownloadDesktopLink>
            </>
          )}
        </DownloadDesktopLinksBlock>
      </Text>
    </DownloadDesktopSection>
  );
}

DownloadDesktop.defaultProps = {
  isEnterprise: false,
};
