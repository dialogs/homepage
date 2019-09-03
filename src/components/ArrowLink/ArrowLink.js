import React from 'react';
import { Link } from 'gatsby';
import styled from 'astroturf';

const StyledGatsbyLink = styled(Link)`
  font-size: 18px;
  line-height: 24px;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: 500;

  img {
    display: inline-block;
    margin-left: 16px;
    width: 24px;
  }

  &.underline {
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      left: 1px;
      width: 50px;
      height: 14px;
      background-color: var(--color-primary);
      transition: width 0.3s ease;
    }

    &:hover {
      &:before {
        width: calc(100% - 36px);
      }
    }

    /* Secondary color mode */
    &.secondary {
      &:before {
        background-color: var(--color-secondary);
      }
    }
  }
`;

export function ArrowLink({ children, alt, ...props }) {
  return (
    <StyledGatsbyLink {...props}>
      {children}
      <img src="/images/svg-icons/arrow-link.svg" alt={alt} />
    </StyledGatsbyLink>
  );
}
