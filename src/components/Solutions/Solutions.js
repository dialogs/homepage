import React from 'react';
import './Solutions.css';
import { Section } from '../Section/Section';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function Solutions({ language }) {
  return (
    <Section className="solutions stretch">
      <div className="solutions__wrapper">
        <div className="solutions__row">
          <div className="solutions__col solutions__col--title">
            <h2 className="solutions__title page_header">
              <FormattedMessage id="solutions_title_1" />
            </h2>
          </div>
          <div className="solutions__col solutions__col--link">
            <div className="solutions__text">
              <FormattedMessage id="solutions_text_1" />
            </div>
            <ArrowLink
              to={`/${language}/patents`}
              className="solutions__link solutions__link--primary-new"
              underline
            >
              <FormattedMessage id="solutions_learn_more" />
            </ArrowLink>
          </div>
        </div>

        <div className="solutions__row">
          <div className="solutions__col solutions__col--title">
            <h2 className="solutions__title page_header">
              <FormattedMessage id="solutions_title_2" />
            </h2>
          </div>
          <div className="solutions__col solutions__col--link">
            <div className="solutions__text">
              <FormattedMessage id="solutions_text_2" />
            </div>
            <ArrowLink
              to={`/${language}/patents`}
              className="solutions__link solutions__link--primary-new"
              underline
            >
              <FormattedMessage id="solutions_learn_more" />
            </ArrowLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
