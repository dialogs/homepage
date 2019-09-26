import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Business.css';
// import { ArrowLink } from '../ArrowLink/ArrowLink';

export function Business({ language }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "images/home/business/man2.png" }) {
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
                  <li className="business__info-logo-item business__info-logo-item--skolkovo business__info-item--box">
                    <img
                      src="/images/home/business/skolkovo.png"
                      alt={language === 'ru' ? 'Сколково' : 'Skolkovo'}
                    />
                    <FormattedMessage id="bigbusiness_skolkovo" />
                  </li>
                  <li className="business__info-logo-item business__info-logo-item--soft business__info-item--box">
                    <img
                      src="/images/home/business/soft.png"
                      alt={
                        language === 'ru' ? 'Отечественный софт' : 'Local Soft'
                      }
                    />
                    <FormattedMessage id="bigbusiness_soft" />
                  </li>
                  <li className="business__info-logo-item business__info-logo-item--ade business__info-item--box">
                    <img
                      src="/images/home/business/ade.png"
                      alt={language === 'ru' ? 'АДЭ' : 'ADE'}
                    />
                    <FormattedMessage id="bigbusiness_ade" />
                  </li>
                </ul>
              </div>
              {/*<ArrowLink*/}
              {/*to={`/${language}/integrations`}*/}
              {/*underline*/}
              {/*primary-new*/}
              {/*className="business__link"*/}
              {/*>*/}
              {/*<FormattedMessage id="solutions_learn_more" />*/}
              {/*</ArrowLink>*/}
            </div>
          </Section>
        );
      }}
    />
  );
}
