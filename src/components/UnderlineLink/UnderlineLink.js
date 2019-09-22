import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { css } from 'astroturf';

const styles = css`
  .link {
    display: inline-block;
    position: relative;
    cursor: pointer;
    line-height: inherit;
    z-index: 1;
    padding: 0;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 100%;
      z-index: -1;
      transition: width 150ms ease;
      transform: translateZ(0);
    }

    &:hover {
      &:before {
        width: 0;
      }
    }
  }

  .left {
    &:before {
      left: 0;
    }
  }

  .right {
    &:before {
      right: 0;
    }
  }

  .primary {
    &:before {
      background-color: var(--color-primary);
    }
  }

  .secondary {
    &:before {
      background-color: var(--color-secondary);
    }
  }

  .secondarynew {
    &:before {
      background-color: var(--color-secondary-new);
    }
  }

  .invert {
    &:before {
      width: 0;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  .linkButton {
    outline: none;
    appearance: none;
  }
`;

const defaultProps = {
  direction: 'left',
  intent: 'secondary',
  invert: false,
};

export function UnderlineLink({
  intent,
  invert,
  direction,
  className,
  children,
  ...props
}) {
  const classes = classNames(
    styles.link,
    styles[intent],
    styles[direction],
    {
      [styles.invert]: invert,
    },
    className,
  );

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

export function UnderlineGatsbyLink({
  intent,
  invert,
  direction,
  className,
  children,
  ...props
}) {
  const classes = classNames(
    styles.link,
    styles[intent],
    styles[direction],
    {
      [styles.invert]: invert,
    },
    className,
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}

export function UnderlineButtonLink({
  intent,
  invert,
  direction,
  className,
  children,
  ...props
}) {
  const classes = classNames(
    styles.link,
    styles.linkButton,
    styles[intent],
    styles[direction],
    {
      [styles.invert]: invert,
    },
    className,
  );

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

UnderlineLink.defaultProps = defaultProps;
UnderlineGatsbyLink.defaultProps = defaultProps;
UnderlineButtonLink.defaultProps = defaultProps;
