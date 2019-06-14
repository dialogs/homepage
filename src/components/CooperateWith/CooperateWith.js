import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';

import './CooperateWith.css';
export function CooperateWith({ className, children }) {
  return (
    <Section className="cooperate">
      <div className="cooperate__wrapper">
        <div className="cooperate__left">
          <div className="cooperate__left__text">
            <FormattedHTMLMessage id="partners_cooperate_text" />
          </div>
          <div className="cooperate__left__button">
            <a className="button button--default" href="#form">
              <FormattedMessage id="partners_cooperate_button" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
