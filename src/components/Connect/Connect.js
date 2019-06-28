import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Container } from '../Container/Container';
import { PageHeading } from '../PageHeading/PageHeading';
import { ArrowLink } from '../ArrowLink/ArrowLink';
import { Section } from '../Section/Section';

export function Connect({ language }) {
  return (
    <Section className="about__green_section">
      <Container>
        <PageHeading className="about__green_section_header">
          <FormattedMessage id="about_partnership" />
        </PageHeading>
        <div className="about__green_section_text_wrapper">
          <FormattedHTMLMessage id="about_partnership_text" />
          <div className="about__read_more">
            <ArrowLink to={`/${language}/partners`} underline secondary>
              <FormattedMessage id="about_read_more" />
            </ArrowLink>
          </div>
        </div>
      </Container>
      <Container>
        <PageHeading className="about__green_section_header">
          <FormattedMessage id="about_integration" />
        </PageHeading>
        <div className="about__green_section_text_wrapper">
          <FormattedHTMLMessage id="about_integration_text" />
          <div className="about__read_more">
            <ArrowLink to={`/${language}/integrations`} underline secondary>
              <FormattedMessage id="about_read_more" />
            </ArrowLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
