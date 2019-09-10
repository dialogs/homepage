import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Business.css';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function Business({ language }) {
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
                <Heading level="1" className="business__info-title">
                  <FormattedMessage id="business_header" />
                </Heading>
                <div className="business__info-subtitle">
                  <FormattedMessage id="business_example" />
                </div>
                <div className="business__info-logo">
                  <img
                    className="business__info-img"
                    src={
                      language === 'ru'
                        ? '/images/home/business/logo-sberbank-business.svg'
                        : '/images/home/business/logo-sberbank-en.svg'
                    }
                    alt={language === 'ru' ? 'Сбербанк' : 'Sberbank'}
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
            <div className="box">
              <Heading level="2" className="box__title">
                <FormattedMessage id="bigbusiness_title" />
              </Heading>
              <div className="box__content">
                <ul className="business__info-list list list--secondary">
                  <li className="business__info-item business__info-item--box">
                    <FormattedMessage id="bigbusiness_platform" />
                  </li>
                  <li className="business__info-item business__info-item--box">
                    <FormattedMessage id="bigbusiness_access" />
                  </li>
                  <li className="business__info-item business__info-item--box">
                    <FormattedMessage id="bigbusiness_api" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <ArrowLink to={`/${language}/integrations`} underline primary-new>
                <FormattedMessage id="solutions_learn_more" />
              </ArrowLink>
            </div>
          </Section>
        );
      }}
    />
  );
}
