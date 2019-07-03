import React from 'react';
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage id="patents.associations.text_4">
            {(text) => {
              return (
                <UnderlineLink
                  href="/sk_cert.pdf"
                  target="_blank"
                  direction="right"
                  rel="noopener noreferrer"
                >
                  {text}
                </UnderlineLink>
              );
            }}
          </FormattedMessage>
        </ListItem>
      </List>
    </PatentsAssociationsSection>
  );
}
