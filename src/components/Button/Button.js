import React from 'react';
import classNames from 'classnames';
import { styled, css } from 'astroturf';

const ButtonTick = styled('span')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 12px;
  border: 2px solid #fff;
  border-right: 0;
  border-top: 0;
  transform-origin: 40% 10%;
  transform: translate(-50%, -50%) rotate(-45deg);

  &.theme-pale,
  &.theme-outline {
    border-color: #1e1e1e;
  }

  &.theme-outline {
    width: 20px;
    height: 10px;
  }
`;

const ButtonExclamation = styled('span').attrs({ children: '!' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 32px;
  opacity: 1;
  transition: opacity 100ms ease-out;
`;

const ButtonSpinnerElement = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 36px;
  height: 36px;
  transform: translate(-50%, -50%) rotate(-90deg);

  &.theme-outline {
    width: 28px;
    height: 28px;
  }
`;

const ButtonSpinnerCircle = styled('circle')`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dashoffset: 30;
    }

    50% {
      stroke-dashoffset: 260;
      transform: rotate(540deg);
    }

    100% {
      transform: rotate(720deg);
      stroke-dashoffset: 30;
    }
  }

  transform-origin: center center;
  stroke: #fff;
  animation: spin 1.5s linear infinite;
  transform: translateZ(0);

  &.theme-pale,
  &.theme-outline {
    stroke: #1e1e1e;
  }
`;

const CIRCLE_STROKE_WIDTH = 6;
const CIRCLE_RADIUS = 44;
const CIRCLE_LENGTH = 2 * Math.PI * CIRCLE_RADIUS;

function ButtonSpinner({ theme }) {
  return (
    <ButtonSpinnerElement
      viewBox="0 0 100 100"
      shapeRendering="auto"
      theme={theme}
    >
      <ButtonSpinnerCircle
        fill="transparent"
        cx="50"
        cy="50"
        r={CIRCLE_RADIUS}
        strokeLinecap="round"
        strokeWidth={CIRCLE_STROKE_WIDTH}
        strokeDasharray={`${CIRCLE_LENGTH} ${CIRCLE_LENGTH}`}
        theme={theme}
      />
    </ButtonSpinnerElement>
  );
}

export const styles = css`
  @import '../../styles/variables.css';

  .container {
    --button-default-text-color: #fff;
    --button-default-background-color: #1e1e1e;
    --button-default-hover-background-color: var(--color-secondary);
    --button-default-active-background-color: color-mod(
      var(--color-secondary) shade(3%)
    );
    --button-pale-text-color: #1e1e1e;
    --button-pale-background-color: color-mod(#1e1e1e alpha(10%));
    --button-pale-active-background-color: color-mod(#1e1e1e alpha(13%));
    --button-outline-background-color: #1e1e1e;
    --button-outline-color: #1e1e1e;
    --button-outline-hover-color: #fff;
    --button-outline-active-background-color: color-mod(#1e1e1e alpha(95%));
    --button-default-disabled-color: color-mod(#1e1e1e alpha(35%));
    --button-default-disabled-background: #f6f6f6;
    --button-font-size: 18px;
    --button-line-height: 24px;
    --button-padding: 20px;

    display: inline-flex;
    text-align: center;
    vertical-align: middle;
    padding: calc(var(--button-padding) / 2) calc(var(--button-padding) * 2);
    cursor: pointer;
    position: relative;
    appearance: none;
    user-select: none;
    min-height: 64px;
    transition: all 150ms ease;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: var(--button-font-size);
    line-height: var(--button-line-height);
    min-width: 200px;

    &:focus {
      z-index: 1;
    }
  }

  .content {
    opacity: 1;
    color: inherit;
    transition: opacity 100ms ease-out;
  }

  .wide {
    width: 100%;
  }

  .disabled {
    cursor: not-allowed !important;

    & .content {
      opacity: 1 !important;
    }
  }

  .default {
    font-weight: 500;
    color: var(--button-default-text-color);
    background-color: var(--button-default-background-color);

    @media (--mobile-viewport) {
      width: 100%;
      max-width: 400px;
      padding-left: 20px;
      padding-right: 20px;
    }

    &:hover {
      background-color: var(--button-default-hover-background-color);
    }

    &:active {
      background-color: var(--button-default-active-background-color);
    }

    &.pending,
    &.success {
      background-color: var(--button-default-background-color) !important;
    }

    &.disabled {
      background-color: var(--button-default-disabled-background) !important;
      color: var(--button-default-disabled-color) !important;
    }
  }

  .pale {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px var(--button-pale-background-color);
    color: var(--button-pale-color);

    &:hover {
      box-shadow: inset 0 0 0 0 var(--button-pale-background-color);
      background-color: var(--button-pale-background-color);
    }

    &:active {
      background-color: var(--button-pale-active-background-color);
    }

    &.success,
    &.pending {
      box-shadow: inset 0 0 0 2px var(--button-pale-background-color) !important;
      background-color: color-mod(#1e1e1e alpha(1%)) !important;
    }

    &.disabled {
      opacity: 0.7;
      background-color: transparent !important;
      color: var(--button-pale-color) !important;
      box-shadow: inset 0 0 0 2px var(--button-pale-background-color) !important;
    }
  }

  .outline {
    font-weight: 500;
    min-height: 50px;
    min-width: 130px;
    background-color: transparent;
    box-shadow: inset 0 0 0 2px var(--button-outline-background-color);
    color: var(--button-outline-color);
    padding: 0 20px;
    font-size: 14px;

    & .icon {
      font-size: 24px;
    }

    &:hover {
      color: var(--button-outline-hover-color);
      background-color: var(--button-outline-background-color);
    }
    &:active {
      background-color: var(--button-outline-active-background-color);
    }

    &.success,
    &.pending {
      background-color: transparent !important;
    }

    &.disabled {
      opacity: 0.7;
      background-color: transparent !important;
      color: var(--button-outline-color) !important;
      box-shadow: inset 0 0 0 2px var(--button-outline-background-color) !important;
    }
  }

  .pending {
    cursor: wait;

    & .content {
      opacity: 0;
    }
  }

  .success {
    cursor: default;

    & .content {
      opacity: 0;
    }
  }

  .error {
    & .content {
      opacity: 0;
    }

    &:hover {
      & .content {
        opacity: 1;
      }

      & .icon {
        opacity: 0;
      }
    }
  }
`;

export function Button({
  children,
  type,
  theme,
  state,
  wide,
  disabled,
  className,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        styles.container,
        styles[theme],
        {
          [styles.pending]: state === 'pending',
          [styles.success]: state === 'success',
          [styles.error]: state === 'error',
          [styles.disabled]: disabled,
          [styles.wide]: wide,
        },
        className,
      )}
      disabled={disabled || state === 'pending' || state === 'success'}
    >
      <span className={styles.content}>{children}</span>
      {!disabled && state === 'pending' && <ButtonSpinner theme={theme} />}
      {!disabled && state === 'success' && <ButtonTick theme={theme} />}
      {!disabled && state === 'error' && (
        <ButtonExclamation className={styles.icon} />
      )}
    </button>
  );
}

export function LinkButton({ children, theme, wide, className, ...props }) {
  return (
    <a
      className={classNames(
        styles.container,
        styles[theme],
        {
          [styles.wide]: wide,
        },
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

Button.defaultProps = {
  type: 'button',
  theme: 'default',
  state: 'default',
  disabled: false,
};

LinkButton.defaultProps = {
  theme: 'default',
  state: 'default',
  disabled: false,
};
