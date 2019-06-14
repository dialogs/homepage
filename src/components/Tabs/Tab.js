import React from 'react';
import classnames from 'classnames';

export function Tab({
  value,
  current,
  changeOnHover,
  children,
  onChange,
  className,
}) {
  const classes = classnames(
    'tabs__tab',
    {
      'tabs__tab--active': value === current,
    },
    className,
  );

  function handleTabSelect() {
    onChange(value);
  }

  const actions = changeOnHover
    ? { onMouseEnter: handleTabSelect }
    : { onClick: handleTabSelect };

  return (
    <div className={classes}>
      <span {...actions}>{children}</span>
    </div>
  );
}
