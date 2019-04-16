import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './SecureCommunication.css';

export function SecureCommunication() {
  return (
    <Section className="secure-communication">
      <Heading level="2">
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
          <ImageFormatted
            src="/images/solution/secure-communication.png"
            altLangId="SecureCommunication_secure"
          />
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
            <li>
              <FormattedMessage id="compliance_text_4" />
            </li>
          </ul>
        </div>
        <div className="link-box">
          <a className="link--arrow" href="/licenses">
            <span className="link--arrow__text">
              <FormattedMessage id="SecureCommunication_learn_more" />
            </span>
            <img
              src="/images/svg-icons/arrow-link.svg"
              alt=""
              className="link--arrow__icon"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
