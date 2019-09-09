import React from 'react';
import './BigBusiness.css';
import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function BigBusiness({ language }) {
  return (
    <Section className="bigb stretch">
      <div className="bigb__wrapper">
        <PageHeading className="bigb__title bigb__title--main page_header">
          <FormattedMessage id="bigbusiness_title" />
        </PageHeading>

        <div className="bigb__row bigb__row--card">
          <div className="bigb__col bigb__col--image">
            <div className="bigb__logo bigb__logo--full">
              <img
                src="/images/home/bigbusiness/logo-full.svg"
                alt="Sberbank logo Full"
              />
            </div>
            <div className="bigb__image">
              <img
                src="/images/home/bigbusiness/person.png"
                alt="Image of a person"
              />
            </div>
          </div>

          <div className="bigb__col bigb__col--text">
            <div className="bigb__logo bigb__logo--small">
              <img
                src="/images/home/bigbusiness/logo-short.png"
                alt="Sberbank logo short"
              />
            </div>
            <div className="bigb__description">
              <FormattedMessage id="bigbusiness_description" />
            </div>
            <div className="bigb__name">
              <FormattedHTMLMessage id="bigbusiness_name" />
            </div>
            <div className="bigb__link">
              <ArrowLink
                to={`/${language}/patents`}
                className="bigb__link bigb__link--primary-new"
              >
                <FormattedMessage id="solutions_learn_more" />
              </ArrowLink>
            </div>
          </div>
        </div>

        <ul className="bigb__list list">
          <div className="bigb__gradient"></div>
          <li className="bigb__item">
            <FormattedMessage id="bigbusiness_platform" />
          </li>
          <li className="bigb__item">
            <FormattedMessage id="bigbusiness_access" />
          </li>
          <li className="bigb__item">
            <FormattedMessage id="bigbusiness_api" />
          </li>
          <li className="bigb__item">
            <FormattedMessage id="bigbusiness_info" />
          </li>
        </ul>
      </div>
    </Section>
  );
}
