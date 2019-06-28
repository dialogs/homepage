import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from '../Section/Section';
import './IntegrationsInvite.css';
export function IntegrationsInvite() {
  return (
    <Section className="invite">
      <div className="invite__wrapper">
        <div className="invite__right">
          <div className="invite__right__content">
            <div className="invite__right__image">
              <img
                className="invite__right__icon"
                src="/images/integrations/invite_icon.svg"
              />
            </div>
            <div className="invite__right__text">
              <FormattedMessage id="invite_text" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
