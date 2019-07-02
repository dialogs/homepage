import React from 'react';
import { styled } from 'astroturf';
import { UnderlineDownloadLink } from '../UnderlineLink/UnderlineDownloadLink';
import { FormattedMessage } from 'react-intl';

export const PatentList = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 40px 0;
`;

export const PatentElement = styled.div`
  @import '../../styles/variables.css';

  flex: 0 0 49%;
  margin-right: 2%;
  margin-bottom: 40px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 32%;
    margin-right: 2%;
    margin-bottom: 60px;

    &:nth-child(2n) {
      margin-right: 2%;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

export const PatentImageLink = styled.a`
  line-height: 0;
  dispaly: inline-block;
`;

export const PatentImage = styled.img`
  max-width: 100%;
  box-shadow: -2px 4px 2px rgba(0, 0, 0, 0.05);
`;

export const PatentLink = styled.div`
  padding-top: 30px;
`;

export function Patent({ src, href, title }) {
  return (
    <FormattedMessage id={title}>
      {(text) => {
        return (
          <PatentElement>
            <PatentImageLink href={href} download>
              <PatentImage src={src} alt={text} />
            </PatentImageLink>
            <PatentLink>
              <UnderlineDownloadLink href={href} download>
                {text}
              </UnderlineDownloadLink>
            </PatentLink>
          </PatentElement>
        );
      }}
    </FormattedMessage>
  );
}
