import React from 'react';
import classnames from 'classnames';
import './Container.css';

export function Container({ className, children }) {
  return <div className={classnames('container', className)}>{children}</div>;
}
