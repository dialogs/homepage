import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { PatentList, Patent } from './PatentsComponents';

const PatentsLicensesSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;
`;

const licenses = [
  {
    src: '/images/license-fsb.jpg',
    href: '/images/license-fsb.jpg',
    title: 'patents.licenses.fsb',
  },
  {
    src: '/images/fstek-1.jpg',
    href: '/images/fstek-1.jpg',
    title: 'patents.licenses.fstec',
  },
  {
    src: '/images/fstek-2.jpg',
    href: '/images/fstek-2.jpg',
    title: 'patents.licenses.fstec',
  },
];

export function PatentsLicenses() {
  return (
    <PatentsLicensesSection>
      <Heading>
        <FormattedMessage id="patents.licenses.header" />
      </Heading>
      <PatentList>
        {licenses.map((patent) => (
          <Patent key={patent.title} {...patent} />
        ))}
      </PatentList>
    </PatentsLicensesSection>
  );
}
