import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

const AboutFeaturesList = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (--tablet-viewport) {
    flex-flow: row wrap;
    padding-top: 60px;
    justify-content: space-between;
  }
`;

const AboutFeatureBlock = styled.div`
  padding-top: 60px;
  flex: 1 1 100%;

  @media (--tablet-viewport) {
    flex: 0 0 48%;
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 30%;
  }
`;

const AboutFeatureBlockIcon = styled.img`
  display: block;
  margin-bottom: 20px;
`;

export function AboutFeatures() {
  const features = ['mission', 'values', 'goal'];

  return (
    <Container>
      <Section id="features">
        <AboutFeaturesList>
          {features.map((feature) => {
            return (
              <AboutFeatureBlock key={feature}>
                <AboutFeatureBlockIcon
                  src={`/images/svg/about-${feature}.svg`}
                />
                <Heading>
                  <FormattedMessage id={`about.features.${feature}.title`} />
                </Heading>
                <Text noPadding>
                  <FormattedMessage id={`about.features.${feature}.text`} />
                </Text>
              </AboutFeatureBlock>
            );
          })}
        </AboutFeaturesList>
      </Section>
    </Container>
  );
}
