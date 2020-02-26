import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { List, ListItem } from '../List/List';

const ResponsibilitySection = styled(Section)`
  padding-top: 0;
`;

export function SocialResponsibility() {
  return (
    <ResponsibilitySection>
      <h1>
        <FormattedMessage id="social_responsibility.header" />
      </h1>
      <Heading>
        <FormattedMessage id="social_responsibility.sub_header" />
      </Heading>
      <p>
        <FormattedMessage id="social_responsibility.text" />
      </p>
      <List intent="primary">
        <ListItem>
          <FormattedHTMLMessage id="social_responsibility.link_register" />
        </ListItem>
        <ListItem>
          <FormattedHTMLMessage id="social_responsibility.link_list" />
        </ListItem>
      </List>
    </ResponsibilitySection>
  );
}
