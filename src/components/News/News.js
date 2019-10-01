import React from 'react';
import './News.css';
import { Section } from '../Section/Section';
import { NewsCard } from './NewsCard';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';
import { Container } from '../Container/Container';

export function News({ language }) {
  return (
    <Section className="news stretch">
      <Container>
        <PageHeading className="news__title">
          <FormattedMessage id="news_title" />
        </PageHeading>

        {language === 'ru' ? (
          <div className="blog__roster-list">
            <NewsCard
              index="market"
              date="2.21.2019"
              link="https://dlg.im/ru/blog/kliuchievyie-triendy-rynka-miessiendzhierov/"
              language={language}
            />
            <NewsCard
              index="digital"
              date="3.20.2019"
              link="https://dlg.im/ru/blog/cifrovaya_gigiena"
              language={language}
            />
            <NewsCard
              index="sber"
              date="4.7.2019"
              link="https://dlg.im/ru/blog/sbierbank-zapustil-korporativnyi-miessiendzhier"
              language={language}
            />
          </div>
        ) : (
          <div className="blog__roster-list">
            <NewsCard
              index="benefits"
              date="8.30.2017"
              link="https://dlg.im/en/blog/benefits-of-active-directory-compatible-corporate-messengers/"
              language={language}
            />
            <NewsCard
              index="corporate"
              date="8.30.2017"
              link="https://dlg.im/en/blog/corporate-messenger-and-byod/"
              language={language}
            />
            <NewsCard
              index="hosting"
              date="8.30.2017"
              link="https://dlg.im/en/blog/explaining-the-main-hosting-models-on-premise-server-self-hosted-hosted-cloud/"
              language={language}
            />
          </div>
        )}

        <div className="news__link">
          <ArrowLink to={`/${language}/blog`} underline primary-new>
            <FormattedMessage id="news_link" />
          </ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
