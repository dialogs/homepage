import React from 'react';
import { styled } from 'astroturf';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { LinkButton } from '../Button/LinkButton';
import appLinks from '../../constants/links';

const DownloadSection = styled(Section)`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    padding-bottom: 50px;
  }
`;

const DownloadWebImage = styled(Image)`
  @import '../../styles/variables.css';

  display: block;
  border-radius: 2px;
  box-shadow: 0 0 64px 0 color-mod(#000 alpha(20%));
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 400px;

  @media (--tablet-viewport) {
    max-width: 450px;
  }
`;

export function DownloadWeb({ isEnterprise }) {
  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;
  const { enterpriseWeb, cloudWeb } = useStaticQuery(graphql`
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
      cloudWeb: file(relativePath: { eq: "images/download/cloud_web.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  function handleDownloadClick(event) {
    if (typeof window !== 'undefined') {
      window.ga('dlg.send', 'event', 'button', 'download', 'dialog_web');
      window.yaCounter.reachGoal(`download_dialog_web`);
    }
  }

  return (
    <Container>
      <DownloadSection>
        <FormattedMessage id="download.web.header">
          {(title) => <Heading level="3">{title}</Heading>}
        </FormattedMessage>
        <FormattedMessage
          id={isEnterprise ? 'download.enterprise.web' : 'download.cloud.web'}
        >
          {(title) => (
            <DownloadWebImage
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
        <LinkButton
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadClick}
        >
          <FormattedMessage id="download.web.start" />
        </LinkButton>
      </DownloadSection>
    </Container>
  );
}

DownloadWeb.defaultProps = {
  isEnterprise: false,
};
