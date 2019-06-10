import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';
import { ArrowLink } from '../ArrowLink/ArrowLink';

import { Section } from '../Section/Section';

import './Safety.css';

export function Safety({ intl: { locale } }) {
  return (
    <Section className="safety">
      <h3 className="safety-title">
        <FormattedHTMLMessage id="safety_header" />
      </h3>

      <div className="safety-item safety-communication">
        <div className="safety-item__title">
          <FormattedMessage id="secure_communication" />
        </div>
        <div className="safety-item__content safety-communication__content">
          <div className="safety-communication__items">
            <div className="safety-communication__item">
              <div className="safety-communication__icon">
                <ImageFormatted
                  src="/images/home/safety/icon-safety-communication-1.svg"
                  altLangId="alt_safety_on_premise"
                />
              </div>
              <div className="safety-communication__text">
                <FormattedMessage id="safety_text_1" />
              </div>
            </div>
            <div className="safety-communication__item">
              <div className="safety-communication__icon">
                <ImageFormatted
                  src="/images/home/safety/icon-safety-communication-3.svg"
                  altLangId="alt_safety_standarts"
                />
              </div>
              <div className="safety-communication__text">
                <FormattedMessage id="safety_text_2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safety-item safety-requirements">
        <div className="safety-item__title">
          <FormattedMessage id="compliance" />
        </div>
        <div className="safety-item__content safety-requirements__content">
          <div className="safety-requirements__items">
            <div className="safety-requirements__item">
              <FormattedMessage id="compliance_index_1" />
            </div>
            <div className="safety-requirements__item">
              <FormattedMessage id="compliance_index_2" />
            </div>
            <div className="safety-requirements__item">
              <FormattedMessage id="compliance_index_3" />
            </div>
          </div>
          <div className="safety-requirements__link-box">
            <ArrowLink to={`/${locale}/patents`} underline>
              <FormattedMessage id="link_more" />
            </ArrowLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
