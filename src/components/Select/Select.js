import React, { createRef, useState } from 'react';
import classNames from 'classnames';

import './Select.css';
export function Select({
  id,
  name,
  tabIndex,
  value,
  options,
  label,
  className,
  onChange,
  isSmall,
}) {
  const ref = createRef();
  const [isFocused, setIsFocused] = useState(false);
  const classes = classNames(
    'select',
    {
      'select--non-empty': Boolean(value),
      'select--focused': isFocused,
      'select--small': Boolean(isSmall),
    },
    className,
  );

  function handleChange() {
    onChange(ref.current.value, name);
  }

  function handleLabelMouseDown(event) {
    event.preventDefault();
    handleFocus();
  }

  function handleFocus() {
    ref.current.focus();
    setIsFocused(true);
  }

  function handleBlur() {
    ref.current.blur();
    setIsFocused(false);
  }

  return (
    <div className={classes}>
      <div className="select__wrapper">
        {label && (
          <label
            className="select__label"
            htmlFor={id}
            onMouseDown={handleLabelMouseDown}
          >
            {label}
          </label>
        )}
        <select
          className="select__select"
          id={id}
          name={name}
          onChange={handleChange}
          ref={ref}
          value={value}
          tabIndex={tabIndex}
          onBlur={handleBlur}
          onFocus={handleFocus}
        >
          {/*label && <option disabled>{label}</option>*/}
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
