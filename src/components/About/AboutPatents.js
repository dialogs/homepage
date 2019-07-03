import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { ArrowLink } from '../ArrowLink/ArrowLink';

const AboutPatentsLinkWrapper = styled.div`
  padding-top: 10px;
`;

export function AboutPatents({ language }) {
  return (
    <Container>
      <Section id="patents">
        <Heading level="1">
          <FormattedMessage id="about.patents.header" />
        </Heading>
        <Text>
          <FormattedMessage id="about.patents.text" />
        </Text>
        <AboutPatentsLinkWrapper>
          <ArrowLink underline to={`/${language}/patents`}>
            <FormattedMessage id="about.patents.link" />
          </ArrowLink>
        </AboutPatentsLinkWrapper>
      </Section>
    </Container>
  );
}
