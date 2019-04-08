import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
                <img
                  src="/images/home/safety/icon-safety-communication-1.svg"
                  alt=""
                />
              </div>
              <div className="safety-communication__text">
                <FormattedMessage id="safety_text_1" />
              </div>
            </div>
            <div className="safety-communication__item">
              <div className="safety-communication__icon">
                <img
                  src="/images/home/safety/icon-safety-communication-3.svg"
                  alt=""
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
            <Link to={`/${locale}/patents`} className="link--arrow">
              <span className="link--arrow__text">
                <FormattedMessage id="link_more" />
              </span>
              <img
                src="/images/svg-icons/arrow-link.svg"
                alt=""
                className="link--arrow__icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
