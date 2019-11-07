import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container } from '../components/Container/Container';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { Page } from '../components/Page/Page';
import { Connect } from '../components/Connect/Connect';
import { AboutContacts } from '../components/About/AboutContacts';
import { AboutPatents } from '../components/About/AboutPatents';
import { AboutFeatures } from '../components/About/AboutFeatures';
// import { WeWantYouBanner } from '../components/WeWantYouBanner/WeWantYouBanner';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    teamImage,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {

  console.log('flag this, again')
  return (
    <Page className="about">
      <FormattedMetaTags
        titleId="meta_title_about"
        descriptionId="meta_description_about"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_about"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container>
        <PageHeading className="about__header_upper">
          <FormattedMessage id="about_more_than_messenger" />
        </PageHeading>
      </Container>

      <section className="about__promo">
        <Container>
          <div className="about__video">
            <FormattedMessage id="more_than_messenger">
              {(alt) => (
                <Image
                  fadeIn={false}
                  fluid={teamImage.childImageSharp.fluid}
                  alt={alt}
                />
              )}
            </FormattedMessage>
          </div>
        </Container>
      </section>

      <section className="about__text">
        <Container>
          <PageHeading className="about__header_middle">
            <FormattedMessage id="about_more_than_messenger" />
          </PageHeading>
          <div className="about__company_wrapper">
            <FormattedHTMLMessage id="about_company" />
            <FormattedHTMLMessage id="career.we_want_you" />
          </div>
        </Container>
      </section>

      {/* <WeWantYouBanner language={language} /> */}
      <Connect language={language} />
      <AboutFeatures />
      <AboutPatents language={language} />
      <AboutContacts />
    </Page>
  );
};

export const pageQuery = graphql`
  {
    teamImage: file(relativePath: { eq: "images/about/corporate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1320) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
