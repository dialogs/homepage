import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { Text } from '../Text/Text';
import { LinkButton } from '../Button/LinkButton';
import { SimpleBanner } from '../Banner/SimpleBanner';

const CooperateBlock = styled.div`
  flex: 1 1 auto;
`;

const CooperateBlockButton = styled(CooperateBlock)`
  @media (--mobile-viewport) {
    width: 100%;
  }

  @media (--tablet-viewport) {
    flex: 0 0 210px;
    text-align: right;
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 300px;
  }

  @media (--laptop-viewport) {
    flex: 0 0 470px;
    text-align: left;
  }
`;

const CooperateText = withProps({
  bold: true,
  size: 'large',
  noPadding: true,
})(styled(Text)`
  & br {
    display: none;
  }

  @media (--mobile-viewport) {
    margin-bottom: 40px;
  }

  @media (--tablet-viewport) {
    padding-right: 50px;
  }

  @media (--desktop-viewport) {
    & br {
      display: block;
    }
  }
`);

const CooperateButton = styled(LinkButton)`
  width: 100%;

  @media (--laptop-viewport) {
    width: 300px;
  }
`;

export function CooperateBanner() {
  return (
    <SimpleBanner side="right" intent="primary">
      <CooperateBlock>
        <CooperateText>
          <FormattedHTMLMessage id="partners_cooperate_text" />
        </CooperateText>
      </CooperateBlock>
      <CooperateBlockButton>
        <FormattedMessage id="partners_cooperate_button">
          {(buttonText) => (
            <CooperateButton href="#partnership_form">
              {buttonText}
            </CooperateButton>
          )}
        </FormattedMessage>
      </CooperateBlockButton>
    </SimpleBanner>
  );
}
