import React from 'react';
import { styled } from 'astroturf';
import { Link } from 'gatsby';
import { FormattedHTMLMessage } from 'react-intl';
import { Container } from '../Container/Container';
import { Text } from '../Text/Text';

const WeWhantYouBlockText = styled.div`
  flex: 1 1 auto;
`;

const WeWhantYouBlockArrow = styled.img`
  flex: 0 0 auto;
  width: 40px;
`;

const WeWhantYouBlock = styled(Link)`
  background-color: var(--color-secondary);
  position: relative;
  display: flex;
  cursor: pointer;
  z-index: 1;
  padding: 30px var(--margin-container-side);
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 calc(-1 * var(--margin-container-side));
  transition: box-shadow 200ms ease;

  @media (--tablet-landscape-viewport) {
    padding: 30px 40px;
    margin: 0 5% -55px;
  }

  @media (--laptop-viewport) {
    margin: 0 10% -55px;
  }

  @media (--desktop-viewport) {
    margin: 0 15% -55px;
  }

  &:hover {
    box-shadow: 0px -6px 14px rgba(0, 0, 0, 0.08);
  }
`;

export function WeWantYouBanner({ language, className, style }) {
  return (
    <Container>
      <WeWhantYouBlock
        className={className}
        style={style}
        to={`${language}/career/`}
      >
        <WeWhantYouBlockText>
          <Text noPadding bold>
            <FormattedHTMLMessage id="career.we_want_you" />
          </Text>
        </WeWhantYouBlockText>
        <WeWhantYouBlockArrow src="/images/svg-icons/arrow.svg" alt="" />
      </WeWhantYouBlock>
    </Container>
  );
}
