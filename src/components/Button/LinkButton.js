import React from 'react';
import classNames from 'classnames';
import './Button.css';

export function LinkButton({ children, className, ...props }) {
  return (
    <a
      {...props}
      className={classNames('button', 'button--default', className)}
    >
      {children}
    </a>
  );
}
