import React from 'react';
import { styled } from 'astroturf';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { List, ListItem } from '../List/List';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { GithubButton } from '../GithubButton/GithubButton';

const OpenSourceList = styled(List)`
  padding-bottom: 0;

  @media (--mobile-viewport) {
    padding-bottom: 40px;
  }
`;

const OpenSourceContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media (--tablet-viewport) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const OpenSourceContentBlock = styled.div`
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
      <Heading level="1">
        <FormattedMessage id="integrations.opensource.header" />
      </Heading>
      <OpenSourceContent>
        <OpenSourceContentBlock>
          <Heading level="3">
            <FormattedMessage id="integrations.opensource.dev.title" />
          </Heading>
          <OpenSourceList>
            <ListItem>
              <FormattedHTMLMessage id="integrations.opensource.dev.portfolio" />
            </ListItem>
            <ListItem>
              <FormattedHTMLMessage id="integrations.opensource.dev.experience" />
              <Text bold>
                <UnderlineLink href="https://oss.dlg.im" direction="right">
                  <FormattedHTMLMessage id="integrations.opensource.dev.participate" />
                </UnderlineLink>
              </Text>
            </ListItem>
          </OpenSourceList>
        </OpenSourceContentBlock>
        <OpenSourceContentBlock>
          <Heading level="3">
            <FormattedMessage id="integrations.opensource.clients.title" />
          </Heading>
          <OpenSourceList>
            <ListItem>
              <FormattedHTMLMessage id="integrations.opensource.clients.community" />
            </ListItem>
            <ListItem>
              <FormattedHTMLMessage id="integrations.opensource.clients.libraries" />
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
