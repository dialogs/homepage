import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import links from '../../constants/links';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';

const offices = [
  {
    city: 'about.contacts.office.msk',
    address: 'about.contacts.office.address.msk',
    link:
      'https://www.google.com/maps/place/dialog/@55.7368062,37.5323798,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zNTXCsDQ0JzEyLjUiTiAzN8KwMzInMDAuNyJF!3b1!8m2!3d55.736806!4d37.533528!3m4!1s0x46b54a53aa3b42cd:0x3c26303a75a2c356!8m2!3d55.7368062!4d37.5334741',
  },
  {
    city: 'about.contacts.office.nsk',
    address: 'about.contacts.office.address.nsk1',
    link:
      'https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9/@54.8580416,83.1106614,18z/data=!4m13!1m7!3m6!1s0x42dfc3f43cc9190d:0x3da699e7445b010e!2z0YPQuy4g0J3QuNC60L7Qu9Cw0LXQstCwLCAxMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDkw!3b1!8m2!3d54.8581713!4d83.1103964!3m4!1s0x0:0x70c9334b88f99469!8m2!3d54.8576537!4d83.1117064',
  },
  {
    city: 'about.contacts.office.nsk',
    address: 'about.contacts.office.address.nsk2',
    link:
      'https://www.google.com/maps/place/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80+MOST/@55.023146,82.920614,15z/data=!4m5!3m4!1s0x0:0x6bef1adfc015b0e6!8m2!3d55.023146!4d82.920614',
  },
];

const AboutContactsContainer = styled(Container)`
  @media (--tablet-landscape-viewport) {
    padding-bottom: 40px;
  }

  @media (--laptop-viewport) {
    padding-bottom: 60px;
  }
`;

const AboutOfficesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const OfficeCardHeader = withProps({ level: '3' })(styled(Heading)`
  padding-bottom: 0 !important;
`);

const AboutContactsLinks = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
`;

const AboutOfficeContainer = styled.div`
  margin-bottom: 40px;
  flex: 1 1 100%;

  @media (--tablet-viewport) {
    flex: 0 0 48%;
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 32%;
  }
`;

const OfficeCardFooter = styled.div`
  padding-top: 10px;

  @media (--tablet-landscape-viewport) {
    padding-top: 40px;
  }
`;

function AboutOffice({ city, address, link }) {
  return (
    <AboutOfficeContainer>
      <FormattedMessage id={city}>
        {(heading) => <OfficeCardHeader>{heading}</OfficeCardHeader>}
      </FormattedMessage>
      <FormattedMessage id={address}>
        {(addr) => (
          <Text size="large" bold>
            {addr}
          </Text>
        )}
      </FormattedMessage>
      <OfficeCardFooter>
        <Text size="large" bold inline>
          <FormattedMessage id="about.contacts.office.link">
            {(text) => (
              <UnderlineLink
                direction="right"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
              >
                {text}
              </UnderlineLink>
            )}
          </FormattedMessage>
        </Text>
      </OfficeCardFooter>
    </AboutOfficeContainer>
  );
}

export function AboutContacts() {
  return (
    <AboutContactsContainer>
      <Section id="contacts">
        <Heading level="1">
          <FormattedMessage id="about.contacts.header" />
        </Heading>
        <AboutContactsLinks>
          <Text size="large" bold inline>
            <UnderlineLink
              direction="right"
              href={`mailto:${links.email.info}`}
              style={{ marginRight: 60 }}
            >
              {links.email.info}
            </UnderlineLink>
            <a href="tel:+78007758202">+7 (800) 775-8202</a>
          </Text>
        </AboutContactsLinks>
        <AboutOfficesContainer>
          {offices.map(({ city, address, link }) => (
            <AboutOffice city={city} address={address} link={link} />
          ))}
        </AboutOfficesContainer>
      </Section>
    </AboutContactsContainer>
  );
}
