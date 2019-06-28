import React, { Children } from 'react';
import styled from 'astroturf';

const SectionContainer = styled.section`
  @import '../../styles/variables.css';

  padding-top: 50px;
  padding-bottom: 50px;

  @media (--tablet-viewport) {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  @media (--tablet-landscape-viewport) {
  }

  @media (--laptop-viewport) {
    padding-bottom: 75px;
  }

  @media (--desktop-viewport) {
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
