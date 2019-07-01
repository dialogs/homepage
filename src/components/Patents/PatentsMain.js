import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { Heading } from '../Heading/Heading';
import { PatentList, Patent } from './PatentsComponents';

const PatentsMainSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;
`;

const patents = [
  {
    src: '/images/patent-dialog-server.jpg',
    href: '/images/patent-dialog-server.jpg',
    title: 'patents.patents.server',
  },
  {
    src: '/images/patent-dialog-core.jpg',
    href: '/images/patent-dialog-core.jpg',
    title: 'patents.patents.core',
  },
  {
    src: '/images/patent-dialog-android-sdk.jpg',
    href: '/images/patent-dialog-android-sdk.jpg',
    title: 'patents.patents.android',
  },
  {
    src: '/images/patent-dialog-ios-sdk.jpg',
    href: '/images/patent-dialog-ios-sdk.jpg',
    title: 'patents.patents.ios',
  },
  {
    src: '/images/patent-dialog-web-sdk.jpg',
    href: '/images/patent-dialog-web-sdk.jpg',
    title: 'patents.patents.web',
  },
];

export function PatentsMain() {
  return (
    <PatentsMainSection>
      <PageHeading>
        <FormattedMessage id="patents.header" />
      </PageHeading>
      <Heading>
        <FormattedMessage id="patents.patents.header" />
      </Heading>
      <PatentList>
        {patents.map((patent) => (
          <Patent key={patent.title} {...patent} />
        ))}
      </PatentList>
    </PatentsMainSection>
  );
}
