import React from 'react';
import classnames from 'classnames';
import './ContainerFluid.css';

export function ContainerFluid({ className, children }) {
  return (
    <div className={classnames('container-fluid', className)}>{children}</div>
  );
}
