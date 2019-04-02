import React from 'react';
import classNames from 'classnames';

import './Button.css';

export function Button({
  children,
  type,
  pending,
  disabled,
  className,
  onClick,
}) {
  const classes = classNames('button', 'button--default', {
    'button--disabled': pending || disabled,
  });

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={pending || disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  peding: false,
};
