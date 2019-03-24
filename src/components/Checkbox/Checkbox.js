import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

export function Checkbox({ label, id, name, className, value, onChange }) {
  const classes = classnames('checkbox', className);

  function handleChange(event) {
    onChange(!value);
  }

  return (
    <div className={classes}>
      <label htmlFor={id} className="checkbox__label">
        <input
          checked={value}
          className="checkbox__input"
          type="checkbox"
          id={id}
          name={name}
          onChange={handleChange}
        />
        <span className="checkbox__checkbox">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path
              d="M1 5.65856L4.94027 9.95214L13.1557 1"
              stroke="#1E1E1E"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="checkbox__text">{label}</span>
      </label>
    </div>
  );
}
