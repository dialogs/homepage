import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';
import Image from 'gatsby-image';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Heading } from '../Heading/Heading';
import { ArrowLink } from '../ArrowLink/ArrowLink';
import './SecureCommunication.css';

export function SecureCommunication({ language, image }) {
  return (
    <Container>
      <Section className="secure-communication">
        <Heading level="1">
          <FormattedMessage id="SecureCommunication_secure" />
        </Heading>

        <div className="box box--architecture">
          <div className="col information">
            <div className="box__icon">
              <ImageFormatted
                src="/images/home/safety/icon-safety-communication-1.svg"
                altLangId="SecureCommunication_secure_arcitecture"
              />
            </div>
            <div className="box__title">
              <FormattedMessage id="SecureCommunication_secure_arcitecture" />
            </div>
            <div className="box__content">
              <div className="box__text">
                <FormattedMessage id="SecureCommunication_on_premise" />
              </div>
            </div>
          </div>
          <div className="col box--architecture__image">
            <FormattedMessage id="SecureCommunication_secure">
              {(alt) => (
                <div className="col__image">
                  <Image
                    fadeIn={false}
                    fluid={image.childImageSharp.fluid}
                    alt={alt}
                  />
                </div>
              )}
            </FormattedMessage>
          </div>
        </div>

        <div className="box box--standarts">
          <div className="box__icon">
            <ImageFormatted
              src="/images/home/safety/icon-safety-communication-2.svg"
              altLangId="SecureCommunication_high_standards"
            />
          </div>
          <div className="box__title">
            <FormattedMessage id="SecureCommunication_high_standards" />
          </div>
          <div className="box__content">
            <div className="items">
              <div className="item">
                <div className="box__subtitle">
                  <FormattedMessage id="SecureCommunication_encryption" />
                </div>
                <div className="box__text">
                  <FormattedMessage id="SecureCommunication_tls_dtls" />
                </div>
              </div>
              <div className="item">
                <div className="box__subtitle">
                  <FormattedMessage id="SecureCommunication_audit" />
                </div>
                <div className="box__text">
                  <FormattedMessage id="SecureCommunication_regular_audit" />
                </div>
              </div>
              <div className="item">
                <div className="box__subtitle">
                  <FormattedMessage id="SecureCommunication_antivirus" />
                </div>
                <div className="box__text">
                  <FormattedMessage id="SecureCommunication_icap" />
                </div>
              </div>
              <div className="item">
                <div className="box__subtitle">SIEM</div>
                <div className="box__text">
                  <FormattedMessage id="SecureCommunication_siem" />
                </div>
              </div>
              <div className="item">
                <div className="box__subtitle">
                  <FormattedMessage id="SecureCommunication_dlp" />
                </div>
                <div className="box__text">
                  <FormattedMessage id="SecureCommunication_dlp_icap" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box box--compliance">
          <div className="box__icon">
            <ImageFormatted
              src="/images/solution/icon-solution-3.svg"
              altLangId="SecureCommunication_requirements"
            />
          </div>
          <div className="box__title">
            <FormattedMessage id="SecureCommunication_requirements" />
          </div>
          <div className="box__content">
            <ul className="list list--secondary">
              <li>
                <FormattedMessage id="compliance_text_1" />
              </li>
              <li>
                <FormattedMessage id="compliance_text_2" />
              </li>
              <li>
                <FormattedMessage id="compliance_text_3" />
              </li>
            </ul>
          </div>
          <div className="link-box">
            <ArrowLink to={`/${language}/patents`} underline>
              <FormattedMessage id="SecureCommunication_learn_more" />
            </ArrowLink>
          </div>
        </div>
      </Section>
    </Container>
  );
}
