import React from 'react';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';

const SimpleBannerContainerWrapper = styled.div`
  position: relative;
`;

const SimpleBannerContainer = styled(Container)`
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

const SimpleBannerSection = styled(Section)`
  padding: 0;
`;

const SimpleBannerWrapper = styled.div`
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

  &.side-right {
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
  }

  &.side-left {
    @media (--laptop-viewport) {
      &:before {
        left: var(--margin-container-side);
        right: 0;
      }
    }

    @media (--desktop-viewport) {
      &:before {
        left: calc(50% - 660px);
      }
    }
  }

  &.intent-primary {
    &:before {
      background-color: var(--color-primary);
    }
  }

  &.intent-secondary {
    &:before {
      background-color: var(--color-secondary);
    }
  }
`;

const SimpleBannerContent = styled.div`
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

export function SimpleBanner({ children, intent, side }) {
  return (
    <SimpleBannerContainer fluid>
      <SimpleBannerContainerWrapper>
        <Container>
          <SimpleBannerSection>
            <SimpleBannerWrapper intent={intent} side={side}>
              <SimpleBannerContent>{children}</SimpleBannerContent>
            </SimpleBannerWrapper>
          </SimpleBannerSection>
        </Container>
      </SimpleBannerContainerWrapper>
    </SimpleBannerContainer>
  );
}
