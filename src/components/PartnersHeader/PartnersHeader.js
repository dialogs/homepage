import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { PageHeading } from '../PageHeading/PageHeading';
import { Text } from '../Text/Text';
import { PageHeader } from '../PageHeader/PageHeader';

const PartnersHeaderText = withProps({
  size: 'large',
  bold: true,
  noPadding: true,
})(styled(Text)`
  @import '../../styles/variables.css';

  margin-bottom: 35px;

  @media (--tablet-viewport) {
    margin-bottom: 40px;
  }

  @media (--tablet-landscape-viewport) {
    margin-bottom: 60px;
  }
`);

export function PartnersHeader({ image }) {
  return (
    <PageHeader image={image}>
      <PageHeading>
        <FormattedMessage id="partners_header_title" />
      </PageHeading>
      <PartnersHeaderText>
        <FormattedMessage id="partners_header_text" />
      </PartnersHeaderText>
    </PageHeader>
  );
}
