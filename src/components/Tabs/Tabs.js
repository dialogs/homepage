import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';

import './Tabs.css';

export function Tabs({
  children,
  vertical,
  changeOnHover,
  current,
  className,
  onChange,
}) {
  const classes = classnames(
    'tabs',
    vertical ? 'tabs--vertical' : 'tabs--horizontal',
    className,
  );

  return (
    <div className={classes}>
      {Children.map(children, (child) =>
        cloneElement(child, { onChange, current, changeOnHover }),
      )}
    </div>
  );
}

Tabs.defaultProps = {
  vertical: false,
  changeOnHover: false,
};
