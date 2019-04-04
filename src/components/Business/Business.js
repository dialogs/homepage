import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Business.css';

export function Business() {
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
              src="/images/home/business/logo-sberbank-business.svg"
              alt="Сбербанк"
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
          <img
            className="business__img"
            src="/images/home/business/man2.png"
            srcSet="/images/home/business/man2@2x.png 2x"
            alt="dialog в большом бизнесе"
          />
        </div>
      </div>
    </Section>
  );
}
