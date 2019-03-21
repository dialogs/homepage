import React from 'react';
import classnames from 'classnames';

import './Section.css';

export function Section({ className, children }) {
  return (
    <section className={classnames('section', className)}>{children}</section>
  );
}
