import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { Container } from '../Container/Container';
import { Text } from '../Text/Text';

const PatrnersHeaderContainer = styled(Container)``;

const PatrnersHeaderSection = styled(Section)`
  @import '../../styles/variables.css';

  padding: 0;
  margin: 0;
  width: 100%;

  @media (--tablet-landscape-viewport) {
    margin: 0 auto;
    padding: 30px var(--margin-container-side);
  }

  @media (--desktop-viewport) {
    padding: 30px 0;
    width: 1320px;
  }
`;

const PatrnersHeaderWrapper = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  align-items: center;

  @media (--mobile-viewport) {
    flex-flow: column;
    align-items: normal;
  }

  @media (--tablet-viewport) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PartnersHeaderContent = styled.div`
  @import '../../styles/variables.css';

  width: 100%;
  padding: 0 var(--margin-container-side) 20px;

  @media (--tablet-landscape-viewport) {
    padding: 0 0 20px;
    width: 50%;
  }

  @media (--laptop-viewport) {
    width: 46%;
  }

  @media (--desktop-viewport) {
    width: 40%;
  }
`;

const PatrnersHeaderText = withProps({
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

const PatrnersHeaderImageWrapper = styled.div`
  @import '../../styles/variables.css';

  width: 100%;
  line-height: 1px;
  posirion: relative;

  @media (--tablet-landscape-viewport) {
    width: auto;
    position: absolute;
    right: 0;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    display: none;
    background-color: var(--color-primary);
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    z-index: -1;
    background-color: var(--color-secondary);
  }

  @media (--tablet-landscape-viewport) {
    &:before {
      display: block;
      left: -42px;
      top: 32px;
      width: 150px;
      height: 150px;
    }

    &:after {
      display: block;
      left: -82px;
      top: 120px;
      right: 72px;
      bottom: -42px;
    }
  }

  @media (--laptop-viewport) {
    &:before {
      left: -50px;
      top: 42px;
    }

    &:after {
      left: -100px;
      top: 140px;
      right: 60px;
      bottom: -50px;
    }
  }

  @media (--desktop-viewport) {
    &:after {
      left: -120px;
      top: 150px;
      right: 64px;
      bottom: -50px;
    }
  }
`;

const PatrnersHeaderImage = styled.img`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media (--tablet-viewport) {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media (--tablet-landscape-viewport) {
    width: 390px;
  }

  @media (--laptop-viewport) {
    width: 620px;
  }

  @media (--desktop-viewport) {
    width: 680px;
  }
`;

export function PartnersHeader() {
  return (
    <PatrnersHeaderContainer fluid style={{ position: 'relative' }}>
      <PatrnersHeaderSection>
        <PatrnersHeaderWrapper>
          <PartnersHeaderContent>
            <PageHeader>
              <FormattedMessage id="partners_header_title" />
            </PageHeader>
            <PatrnersHeaderText>
              <FormattedMessage id="partners_header_text" />
            </PatrnersHeaderText>
          </PartnersHeaderContent>
          <PatrnersHeaderImageWrapper>
            <PatrnersHeaderImage src="/images/partners/partners_promo.png" />
          </PatrnersHeaderImageWrapper>
        </PatrnersHeaderWrapper>
      </PatrnersHeaderSection>
    </PatrnersHeaderContainer>
  );
}
