import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import './Hero.css';

export function Hero({ openOfferModal, intl: { formatMessage } }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          heroImage: file(relativePath: { eq: "images/home/hero.png" }) {
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
              <div className="hero__content">
                <PageHeader>{formatMessage({ id: 'hero_header' })}</PageHeader>
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
              <div className="hero__image">
                <Image
                  fadeIn={false}
                  fluid={heroImage.childImageSharp.fluid}
                  alt={formatMessage({ id: 'hero_header' })}
                />
              </div>
            </div>
          </Section>
        );
      }}
    />
  );
}
