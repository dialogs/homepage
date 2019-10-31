import React from 'react';
import styled from 'astroturf';

const SectionContainer = styled.section`
  @media (--mobile-viewport) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (--tablet-viewport) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (--tablet-landscape-viewport) {
  }

  @media (--laptop-viewport) {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  @media (--desktop-viewport) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export function Section({ className, id, children }) {
  return (
    <SectionContainer className={className} id={id}>
      {children}
    </SectionContainer>
  );
}
