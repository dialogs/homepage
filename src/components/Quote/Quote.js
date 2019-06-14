import React from 'react';
import classnames from 'classnames';

import './Quote.css';
export function Quote({ className, children }) {
  return (
    <blockquote className={classnames('quote', className)}>
      {children}
    </blockquote>
  );
}
