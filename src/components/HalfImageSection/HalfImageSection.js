import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

// import { Page } from '../Page/Page';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';

export function HalfImageSection(sectionClassName) {
  return (
    <Section className={sectionClassName}>
      <Heading>
        <FormattedMessage id="what_dialog_can" />
      </Heading>
    </Section>
  );
}
