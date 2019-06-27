import React from 'react';
import { styled } from 'astroturf';

const UnderlineLinkElement = styled.a`
  @import '../../styles/variables.css';

  display: inline-block;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    transition: width 150ms ease;
    transform: translateZ(0);
  }

  &:hover {
    &:before {
      width: 0;
    }
  }

  &.direction-left {
    &:before {
      left: 0;
    }
  }

  &.direction-right {
    &:before {
      right: 0;
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

  &.invert {
    &:before {
      width: 0;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

export function UnderlineLink({
  intent,
  invert,
  direction,
  className,
  children,
  ...props
}) {
  return (
    <UnderlineLinkElement
      direction={direction}
      intent={intent}
      invert={invert}
      className={className}
      {...props}
    >
      {children}
    </UnderlineLinkElement>
  );
}

UnderlineLink.defaultProps = {
  direction: 'left',
  intent: 'secondary',
  invert: false,
};
