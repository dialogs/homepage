import React, { useState, useEffect } from 'react';
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
}) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (error || valueStatus === 200) {
      setIsFinished(true);
    }
    return () => setIsFinished(true);
  }, []);

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

  return isFinished && (error || valueStatus === 200) ? (
    <div className="button__info">
      {' '}
      {error ? (
        <FormattedHTMLMessage id="form_error_message" />
      ) : (
        <FormattedHTMLMessage id="form_success_message" />
      )}
    </div>
  ) : (
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
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  pending: false,
};
