import React from 'react';
import classnames from 'classnames';

export function Tab({ value, current, changeOnHover, children, onChange }) {
  const className = classnames('tabs__tab', {
    'tabs__tab--active': value === current,
  });

  function handleTabSelect() {
    onChange(value);
  }

  const actions = changeOnHover
    ? { onMouseEnter: handleTabSelect }
    : { onClick: handleTabSelect };

  return (
    <div className={className} {...actions}>
      {children}
    </div>
  );
}
