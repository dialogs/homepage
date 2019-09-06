import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import './Hero.css';

export function Hero({ openOfferModal, intl: { formatMessage } }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          heroImage: file(
            relativePath: { eq: "images/home/hero/hero-main.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
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
              <div className="hero__content">
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
              <Image
                fadeIn={false}
                fluid={heroImage.childImageSharp.fluid}
                alt={formatMessage({ id: 'hero_header' })}
                className="hero__image"
              />
              <div className="hero__info">
                <div className="hero__text hero__text--available hero__text--gray">
                  {formatMessage({ id: 'platform_available' })}
                </div>
                <div className="hero__row">
                  <div className="hero__platform">
                    <img
                      className="hero__icon"
                      alt="ios"
                      src="/images/home/hero/supported-devices-1.png"
                    />
                    <div className="hero__text ">iOS</div>
                  </div>
                  <div className="hero__platform">
                    <img
                      className="hero__icon"
                      alt="android"
                      src="/images/home/hero/supported-devices-2.png"
                    />
                    <div className="hero__text ">Android</div>
                  </div>
                  <div className="hero__platform">
                    <img
                      className="hero__icon"
                      alt="windows"
                      src="/images/home/hero/supported-devices-3.png"
                    />
                    <div className="hero__text ">Windows</div>
                  </div>
                  <div className="hero__platform">
                    <img
                      className="hero__icon"
                      alt="macos"
                      src="/images/home/hero/supported-devices-4.png"
                    />
                    <div className="hero__text ">macOS</div>
                  </div>
                  <div className="hero__platform">
                    <img
                      className="hero__icon"
                      alt="linux"
                      src="/images/home/hero/supported-devices-5.png"
                    />
                    <div className="hero__text ">Linux</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      }}
    />
  );
}
