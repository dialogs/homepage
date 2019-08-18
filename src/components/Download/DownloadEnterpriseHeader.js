import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { Text } from '../Text/Text';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';

const DownloadHeaderSection = styled(Section)`
  padding: 0;
`;

export function DownloadEnterpriseHeader({ language }) {
  return (
    <Container>
      <DownloadHeaderSection>
        <PageHeading>
          <FormattedMessage id="download.enterprise.header" />
        </PageHeading>
        <Text size="large">
          <FormattedMessage id="download.enterprise.subtitle.before" />
          <FormattedMessage id="download.enterprise.subtitle.supportLink">
            {(text) => (
              <UnderlineLink
                direction="right"
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.dlg.im"
              >
                {text}
              </UnderlineLink>
            )}
          </FormattedMessage>
          {'. '}
        </Text>
      </DownloadHeaderSection>
    </Container>
  );
}
