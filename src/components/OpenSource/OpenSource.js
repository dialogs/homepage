import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import './OpenSource.css';
export function OpenSource() {
  return (
    <Section className="open">
      <Heading>
        <FormattedMessage id="open_header" />
      </Heading>
      <div className="open__wrapper">
        <div className="open__wrapper__item">
          <p className="open__title">
            <FormattedMessage id="open_dev_title" />
          </p>
          <ul className="list list--secondary">
            <li className="open__text">
              <FormattedMessage id="open_dev_portfolio" />
            </li>
            <li className="open__text">
              <FormattedMessage id="open_dev_experience" />
            </li>
          </ul>
          <div className="open__footer">
            <p className="open__subtitle">
              <FormattedMessage id="open_dev_subtitle" />
            </p>
            <div className="open__bounties">
              <p className="open__bounty">
                <FormattedMessage id="open_bounce" />
              </p>
              <p className="open__bounty">
                <FormattedMessage id="open_bountify" />
              </p>
            </div>
          </div>
        </div>
        <div className="open__wrapper__item">
          <p className="open__title">
            <FormattedMessage id="open_clients_title" />
          </p>
          <ul className="list list--secondary">
            <li className="open__text">
              <FormattedMessage id="open_clients_community" />
            </li>
            <li className="open__text">
              <FormattedMessage id="open_clients_libraries" />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
