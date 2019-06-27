import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { List, ListItem } from '../List/List';

const PartnersInfoList = styled(List)`
  @import '../../styles/variables.css';

  padding-bottom: 0;

  @media (--mobile-viewport) {
    padding-bottom: 40px;
  }
`;

const PartnersInfoPartnership = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media (--tablet-viewport) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const PartnersInfoBlock = styled.div`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    flex: 0 0 auto;
  }

  @media (--tablet-viewport) {
    flex: 0 0 45.5%;
  }

  @media (--laptop-viewport) {
    flex: 0 0 46%;
  }

  @media (--desktop-viewport) {
    flex: 0 0 42%;
  }
`;

export function PartnersInfo() {
  return (
    <Section>
      <PageHeader>
        <FormattedMessage id="partners_info_header" />
      </PageHeader>
      <PartnersInfoPartnership>
        <PartnersInfoBlock>
          <Heading level="3">
            <FormattedMessage id="partners_business_title" />
          </Heading>
          <Text size="large">
            <FormattedMessage id="partners_business_info" />
          </Text>
          <PartnersInfoList>
            <ListItem>
              <FormattedMessage id="partners_business_info_who" />
            </ListItem>
            <ListItem>
              <FormattedMessage id="partners_business_info_target" />
            </ListItem>
          </PartnersInfoList>
        </PartnersInfoBlock>
        <PartnersInfoBlock>
          <Heading level="3">
            <FormattedMessage id="partners_technology_title" />
          </Heading>
          <Text size="large">
            <FormattedMessage id="partners_technology_info" />
          </Text>
          <PartnersInfoList>
            <ListItem>
              <FormattedMessage id="partners_technology_info_who" />
            </ListItem>
            <ListItem>
              <FormattedMessage id="partners_technology_info_target" />
            </ListItem>
          </PartnersInfoList>
        </PartnersInfoBlock>
      </PartnersInfoPartnership>
    </Section>
  );
}
