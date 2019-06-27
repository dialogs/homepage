import React from 'react';
import { styled } from 'astroturf';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { List, ListItem } from '../List/List';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { GithubButton } from '../GithubButton/GithubButton';

const OpenSourceList = styled(List)`
  @import '../../styles/variables.css';

  padding-bottom: 0;

  @media (--mobile-viewport) {
    padding-bottom: 40px;
  }
`;

const OpenSourceContent = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media (--tablet-viewport) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const OpenSourceContentBlock = styled.div`
  @import '../../styles/variables.css';
  margin-bottom: 40px;

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

const GithubButtonWrapper = styled.div`
  display: block;
  margin-left: -9px;
  margin-top: 20px;
`;

export function OpenSource() {
  return (
    <Section>
      <PageHeader>
        <FormattedMessage id="open_header" />
      </PageHeader>
      <OpenSourceContent>
        <OpenSourceContentBlock>
          <Heading level="3">
            <FormattedMessage id="open_dev_title" />
          </Heading>
          <OpenSourceList>
            <ListItem>
              <FormattedHTMLMessage id="open_dev_portfolio" />
            </ListItem>
            <ListItem>
              <FormattedHTMLMessage id="open_dev_experience" />
            </ListItem>
          </OpenSourceList>
          <Text bold inline={false}>
            <FormattedMessage id="open_dev_subtitle" />
          </Text>
          <Text>
            <UnderlineLink
              href="https://www.bountysource.com/teams/dialogs"
              direction="right"
            >
              Bountysource
            </UnderlineLink>
          </Text>
        </OpenSourceContentBlock>
        <OpenSourceContentBlock>
          <Heading level="3">
            <FormattedMessage id="open_clients_title" />
          </Heading>
          <OpenSourceList>
            <ListItem>
              <FormattedHTMLMessage id="open_clients_community" />
            </ListItem>
            <ListItem>
              <FormattedHTMLMessage id="open_clients_libraries" />
              <GithubButtonWrapper>
                <GithubButton />
              </GithubButtonWrapper>
            </ListItem>
          </OpenSourceList>
        </OpenSourceContentBlock>
      </OpenSourceContent>
    </Section>
  );
}
