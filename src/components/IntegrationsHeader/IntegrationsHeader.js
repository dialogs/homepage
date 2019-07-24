import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';

export function IntegrationsHeader({ image }) {
  return (
    <PageHeader image={image}>
      <PageHeading>
        <FormattedMessage id="integrations.header" />
      </PageHeading>
    </PageHeader>
  );
}
