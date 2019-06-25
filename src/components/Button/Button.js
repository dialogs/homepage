import React, { useState } from 'react';
import classNames from 'classnames';

import './Button.css';

export function Button({
  children,
  type,
  pending,
  valueStatus,
  error,
  disabled,
  className,
  onClick,
}) {
  const [isFinished, setIsFinished] = useState(false);
  function handleOnClick() {
    console.log('fired');
    setTimeout(function() {
      setIsFinished(true);
    }, 6000);
  }
  const classes = classNames(
    'button',
    'button--default',
    {
      'button--disabled': disabled,
      animate: pending,
      'animate error': error,
      'animate success': valueStatus && valueStatus.status == 200,
    },
    className,
  );

  return !isFinished ? (
    <button
      type={type}
      className={classes}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <div> {error ? 'Error' : 'Success'}</div>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  pending: false,
};
