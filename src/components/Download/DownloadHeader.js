import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { Text } from '../Text/Text';
import { UnderlineButtonLink } from '../UnderlineLink/UnderlineLink';

const DownloadHeaderSection = styled(Section)`
  padding: 0;
`;

export function DownloadHeader({ openOfferModal }) {
  return (
    <Container>
      <DownloadHeaderSection>
        <PageHeading>
          <FormattedMessage id="download.cloud.header" />
        </PageHeading>
        <Text size="large">
          <FormattedMessage id="download.cloud.subtitle.button">
            {(buttonText) => (
              <UnderlineButtonLink direction="right" onClick={openOfferModal}>
                {buttonText}
              </UnderlineButtonLink>
            )}
          </FormattedMessage>
          <FormattedMessage id="download.cloud.subtitle.text" />
        </Text>
      </DownloadHeaderSection>
    </Container>
  );
}
