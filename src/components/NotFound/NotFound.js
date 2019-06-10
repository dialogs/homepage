import React from 'react';
import { Link } from 'gatsby';
import { FormattedHTMLMessage } from 'react-intl';

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
        <Link
          to="/"
          className="button button--default not_found__button--uppper"
        >
          <FormattedHTMLMessage id="404_go_to_home" />
        </Link>
      </div>
      <div className="not_found__col">
        <img src="/images/404.png" alt="" className="not_found__image" />
        <Link to="/" className="button button--default not_found__button--down">
          <FormattedHTMLMessage id="404_go_to_home" />
        </Link>
      </div>
    </Section>
  );
}
