import React from 'react';
import classNames from 'classnames';
import { css } from 'astroturf';

const styles = css`
  @import '../../styles/variables.css';

  .text {
    font-family: var(--font-family);
    letter-spacing: 0.01em;
    margin: 0;
    padding: 1em 0;

    & b,
    & strong {
      font-weight: 500;
    }
  }

  .inline {
    padding: 0;
  }

  .large {
    font-size: 18px;
    line-height: 24px;

    @media (--tablet-landscape-viewport) {
      font-size: 20px;
      line-height: 26px;
    }

    @media (--laptop-viewport) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .normal {
    font-size: 16px;
    line-height: 22px;

    @media (--laptop-viewport) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .small {
  }

  .bold {
    font-weight: 500;
  }

  .noPadding {
    padding: 0;
  }
`;

export function Text({
  inline,
  noPadding,
  bold,
  size,
  className,
  style,
  children,
}) {
  const TagName = inline ? 'span' : 'p';
  const classes = classNames(
    styles.text,
    {
      [styles.inline]: inline,
      [styles.noPadding]: noPadding,
      [styles.bold]: bold,
    },
    styles[size],
    className,
  );

  return (
    <TagName className={classes} style={style}>
      {children}
    </TagName>
  );
}

Text.defaultProps = {
  inline: false,
  bold: false,
  size: 'normal',
  noPadding: false,
};
