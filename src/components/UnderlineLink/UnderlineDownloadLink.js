import React from 'react';
import classNames from 'classnames';
import { css } from 'astroturf';

const styles = css`
  .link {
    display: inline-flex;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
      & .text:before {
        width: 0px;
      }
    }
  }

  .text {
    flex: 0 0 auto;
    position: relative;
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
    display: inline-block;

    &:before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: 2px;
      background-color: var(--color-secondary);
      right: 0;
      width: 100%;
      transition: width 100ms ease;
    }
  }

  .image {
    flex: 0 0 auto;
    line-height: 0;
    height: 22px;
    display: inline-block;
    margin-left: 12px;
    user-select: none;
    pointer-events: none;
  }
`;

export function UnderlineDownloadLink({ alt, className, children, ...props }) {
  return (
    <a className={classNames(styles.link, className)} {...props}>
      <span className={styles.text}>{children}</span>
      <img
        className={styles.image}
        src="/images/svg-icons/arrow-download.svg"
        alt={alt}
      />
    </a>
  );
}
