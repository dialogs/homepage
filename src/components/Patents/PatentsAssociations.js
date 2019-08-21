import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { List, ListItem } from '../List/List';

const PatentsAssociationsSection = styled(Section)`
  padding-top: 0;
`;

export function PatentsAssociations() {
  return (
    <PatentsAssociationsSection>
      <Heading>
        <FormattedMessage id="patents.associations.header" />
      </Heading>
      <List intent="primary">
        <ListItem>
          <FormattedMessage id="patents.associations.text_1" />
        </ListItem>
        <ListItem>
          <FormattedMessage id="patents.associations.text_2" />
        </ListItem>
        <ListItem>
          <FormattedMessage id="patents.associations.text_3" />
        </ListItem>
        <ListItem>
          <FormattedHTMLMessage id="patents.associations.text_4" />
        </ListItem>
      </List>
    </PatentsAssociationsSection>
  );
}
