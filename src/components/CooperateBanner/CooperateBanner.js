import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { Section } from '../Section/Section';
import { Text } from '../Text/Text';
import { LinkButton } from '../Button/LinkButton';
import { Container } from '../Container/Container';

const CooperateContainerWrapper = styled.div`
  position: relative;
`;

const CooperateContainer = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;

  @media (--tablet-viewport) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (--laptop-viewport) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const CooperateSection = styled(Section)`
  padding: 0;
`;

const CooperateWrapper = styled.div`
  @import '../../styles/variables.css';

  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--color-primary);
    top: 0;
    bottom: 0;
    width: auto;
    right: 0;
    left: 0;
    z-index: -1;
    box-shadow: 0px -6px 14px color-mod(#000 alpha(8%));
  }

  @media (--laptop-viewport) {
    &:before {
      right: var(--margin-container-side);
      left: 0;
    }
  }
  @media (--desktop-viewport) {
    &:before {
      right: calc(50% - 660px);
    }
  }
`;

const CooperateContent = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: row nowrap;
  padding: 60px 0;
  align-items: center;
  justify-content: flex-start;

  @media (--mobile-viewport) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

const CooperateBlock = styled.div`
  flex: 1 1 auto;
`;

const CooperateBlockButton = styled(CooperateBlock)`
  @import '../../styles/variables.css';

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
  @import '../../styles/variables.css';

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
  @import '../../styles/variables.css';

  width: 100%;

  @media (--laptop-viewport) {
    width: 300px;
  }
`;

export function CooperateBanner() {
  return (
    <CooperateContainer fluid>
      <CooperateContainerWrapper>
        <Container>
          <CooperateSection>
            <CooperateWrapper>
              <CooperateContent>
                <CooperateBlock>
                  <CooperateText>
                    <FormattedHTMLMessage id="partners_cooperate_text" />
                  </CooperateText>
                </CooperateBlock>
                <CooperateBlockButton>
                  <FormattedMessage id="partners_cooperate_button">
                    {(buttonText) => (
                      <CooperateButton href="#form">
                        {buttonText}
                      </CooperateButton>
                    )}
                  </FormattedMessage>
                </CooperateBlockButton>
              </CooperateContent>
            </CooperateWrapper>
          </CooperateSection>
        </Container>
      </CooperateContainerWrapper>
    </CooperateContainer>
  );
}
