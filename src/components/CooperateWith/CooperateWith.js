import React from 'react';
import classnames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';

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
            <Button>Сотрудничать</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
