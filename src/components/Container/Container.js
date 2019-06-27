import React from 'react';
import { styled } from 'astroturf';

const StyledContainer = styled.div`
  @import '../../styles/variables.css';

  margin: var(--container-margin);
  padding: 0;

  @media (--desktop-viewport) {
    width: 1320px;
    margin: 0 auto;
  }

  &.fluid {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export function Container({ className, children, style, fluid }) {
  return (
    <StyledContainer className={className} style={style} fluid={fluid}>
      {children}
    </StyledContainer>
  );
}

Container.defaultProps = {
  fluid: false,
};
