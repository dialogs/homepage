import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Business.css';

export function Business({ intl: { locale } }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          image: file(
            relativePath: { eq: "images/home/business/man2@2x.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 230) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ image }) => {
        return (
          <Section className="business">
            <div className="business__cols">
              <div className="business__info">
                <Heading className="business__info-title">
                  <FormattedMessage id="business_header" />
                </Heading>
                <div className="business__info-subtitle">
                  <FormattedMessage id="business_example" />
                </div>
                <div className="business__info-logo">
                  <img
                    className="business__info-img"
                    src={
                      locale === 'ru'
                        ? '/images/home/business/logo-sberbank-business.svg'
                        : '/images/home/business/logo-sberbank-en.svg'
                    }
                    alt={locale === 'ru' ? 'Сбербанк' : 'Sberbank'}
                  />
                </div>
                <ul className="business__info-list list list--secondary">
                  <li className="business__info-item">
                    <FormattedMessage id="business_case_1" />
                  </li>
                  <li className="business__info-item">
                    <FormattedMessage id="business_case_2" />
                  </li>
                  <li className="business__info-item">
                    <FormattedMessage id="business_case_3" />
                  </li>
                  <li className="business__info-item">
                    <FormattedMessage id="business_case_4" />
                  </li>
                </ul>
              </div>
              <div className="business__image">
                <FormattedMessage id="alt_big_business">
                  {(alt) => (
                    <Image
                      fadeIn={false}
                      className="business__img"
                      fluid={image.childImageSharp.fluid}
                      alt={alt}
                    />
                  )}
                </FormattedMessage>
              </div>
            </div>
          </Section>
        );
      }}
    />
  );
}
