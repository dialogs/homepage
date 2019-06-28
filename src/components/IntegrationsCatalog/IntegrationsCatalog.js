import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { IntegrationCard } from '../IntegrationCard/IntegrationCard';
import { integrations } from './integrationsData';

const IntegrationsCatalogCards = styled.div`
  @import '../../styles/variables.css';

  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (--tablet-landscape-viewport) {
    justify-content: flex-start;
  }
`;

export function IntegrationsCatalog() {
  return (
    <Section>
      <Heading>
        <FormattedMessage id="integrations_header" />
      </Heading>
      <Text size="large" bold>
        <FormattedHTMLMessage id="integrations_subtitle" />
      </Text>
      <IntegrationsCatalogCards>
        {integrations.map(IntegrationCard)}
      </IntegrationsCatalogCards>
    </Section>
  );
}
