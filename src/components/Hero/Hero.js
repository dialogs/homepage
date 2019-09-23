import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import './Hero.css';
import { Heading } from '../Heading/Heading';
import { FormattedMessage } from 'react-intl';
import { Text } from '../Text/Text';

export function Hero({ openOfferModal, intl: { formatMessage } }) {
  const platforms = ['iOS', 'Android', 'Windows', 'macOS', 'Linux'];

  return (
    <StaticQuery
      query={graphql`
        query {
          heroImage: file(relativePath: { eq: "images/home/hero/hero.png" }) {
            childImageSharp {
              fluid(maxWidth: 780) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ heroImage }) => {
        return (
          <Section className="hero">
            <div className="hero__wrapper">
              <div className="hero__col--content">
                <PageHeading>
                  {formatMessage({ id: 'hero_header' })}
                </PageHeading>

                <h4 className="hero__text">
                  {formatMessage({ id: 'hero_subheader' })}
                </h4>

                <button
                  type="button"
                  className="button button--default"
                  onClick={openOfferModal}
                >
                  {formatMessage({ id: 'button_get_offer' })}
                </button>
              </div>

              <div className="hero__col--image">
                <Image
                  className="hero__image"
                  fadeIn={false}
                  fluid={heroImage.childImageSharp.fluid}
                  alt={formatMessage({ id: 'hero_header' })}
                />
              </div>

              <div className="hero__col--platforms">
                <div className="hero__text hero__text--available ">
                  {formatMessage({ id: 'platform_available' })}
                </div>

                <div className="hero__row--platforms">
                  {platforms.map((platform) => {
                    return (
                      <div className="hero__platform">
                        <img
                          className="hero__icon"
                          alt={`${platform}`}
                          src={`/images/home/hero/platform-${platform}.png`}
                        />
                        <div className="hero__text--icon">{platform}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Section>
        );
      }}
    />
  );
}
