import React, { useState } from 'react';
import classNames from 'classnames';

import './Button.css';
import { FormattedHTMLMessage } from 'react-intl';

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
      'animate success': valueStatus && valueStatus.status === 200,
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
      <div className="loading">
        <div className="inner-shadow"></div>
        <div className="timer">
          <div className="hold" id="left">
            <div className="pie"></div>
          </div>
          <div className="hold" id="right">
            <div className="pie"></div>
          </div>
        </div>
      </div>
    </button>
  ) : (
    <div className="button__info">
      {' '}
      {error ? (
        <FormattedHTMLMessage id="form_error_message" />
      ) : (
        <FormattedHTMLMessage id="form_success_message" />
      )}
    </div>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  pending: false,
};
