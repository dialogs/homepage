import React from 'react';
import { GatsbyLinkButton } from '../Button/Button';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import './NotFound.css';

export function NotFound() {
  return (
    <Section className="not_found">
      <div className="not_found__col">
        <Heading level="1" className="not_found__header">
          <FormattedHTMLMessage id="404_title" />
        </Heading>
        <p className="not_found__text">
          <FormattedHTMLMessage id="404_text" />
        </p>
        <FormattedMessage id="404_go_to_home">
          {(buttonText) => (
            <GatsbyLinkButton to="/" className="not_found__button--uppper">
              {buttonText}
            </GatsbyLinkButton>
          )}
        </FormattedMessage>
      </div>
      <div className="not_found__col">
        <img src="/images/404.png" alt="" className="not_found__image" />
        <FormattedMessage id="404_go_to_home">
          {(buttonText) => (
            <GatsbyLinkButton to="/" className="not_found__button--down">
              {buttonText}
            </GatsbyLinkButton>
          )}
        </FormattedMessage>
      </div>
    </Section>
  );
}
