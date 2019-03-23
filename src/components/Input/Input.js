/* eslint-disable no-restricted-globals */
import React, { useState, createRef } from 'react';

import classNames from 'classnames';
import './Input.css';

export function Input({
  type,
  id,
  value,
  tabIndex,
  name,
  disabled,
  label,
  className,
  onChange,
}) {
  const ref = createRef();
  const [isFocused, setIsFocused] = useState(false);
  const classes = classNames(
    'input',
    {
      'input--non-empty': Boolean(value),
      'input--focused': isFocused,
    },
    className,
  );

  function handleChange(event) {
    onChange(ref.current.value);
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
      <div className="input__wrapper">
        {label && (
          <label
            className="input__label"
            htmlFor={id}
            onMouseDown={handleLabelMouseDown}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className="input__input"
          value={value}
          onChange={handleChange}
          tabIndex={tabIndex}
          onBlur={handleBlur}
          onFocus={handleFocus}
          name={name}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
