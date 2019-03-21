import React from 'react';
import classnames from 'classnames';

export function Tab({ value, current, children, onChange }) {
  const className = classnames('tabs__tab', {
    'tabs__tab--active': value === current,
  });

  return (
    <div data-tab={value} className={className} onClick={() => onChange(value)}>
      {children}
    </div>
  );
}
