import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Container } from '../Container/Container';
import { PageHeading } from '../PageHeading/PageHeading';
import { ArrowLink } from '../ArrowLink/ArrowLink';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

export function Solutions({ language }) {
  return (
    <Section className="about__green_section about__green_section--new stretch">
      <Container>
        <Heading level="3" className="about__green_section_title">
          <FormattedMessage id="solutions_title_main" />
        </Heading>
      </Container>
      <Container>
        <PageHeading className="about__green_section_header">
          <FormattedMessage id="solutions_title_1" />
        </PageHeading>
        <div className="about__green_section_text_wrapper">
          <FormattedHTMLMessage id="solutions_text_1" />
          <div className="about__read_more">
            <ArrowLink to={`/${language}/partners`} underline secondary-new>
              <FormattedMessage id="solutions_learn_more" />
            </ArrowLink>
          </div>
        </div>
      </Container>
      <Container>
        <PageHeading className="about__green_section_header">
          <FormattedMessage id="solutions_title_2" />
        </PageHeading>
        <div className="about__green_section_text_wrapper">
          <FormattedHTMLMessage id="solutions_text_2" />
          <div className="about__read_more">
            <ArrowLink to={`/${language}/integrations`} underline secondary-new>
              <FormattedMessage id="solutions_learn_more" />
            </ArrowLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
