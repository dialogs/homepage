import React, { Children, cloneElement } from 'react';
import './Tabs.css';

export function Tabs({ children, current, onChange }) {
  return (
    <div className="tabs">
      {Children.map(children, (child) =>
        cloneElement(child, { onChange, current }),
      )}
    </div>
  );
}
