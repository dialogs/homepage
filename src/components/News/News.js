import React from 'react';
import './News.css';
import { Section } from '../Section/Section';
import { NewsCard } from './NewsCard';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function News({ language }) {
  return (
    <Section className="news stretch stretch--news">
      <PageHeading className="news__title">
        <FormattedMessage id="news_title" />
      </PageHeading>
      <div className="blog__roster-list">
        <NewsCard index="1" date="1.10.12" language="ru" />
        <NewsCard index="2" date="1.10.12" language="ru" />
        <NewsCard index="3" date="1.10.12" language="ru" />
      </div>
      <div className="news__link">
        <ArrowLink to={`/${language}/about`} primary-new>
          <FormattedMessage id="news_link" />
        </ArrowLink>
      </div>
    </Section>
  );
}
