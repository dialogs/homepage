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
  rows,
  state,
  required,
}) {
  const ref = createRef();
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const classes = classNames(
    'input',
    {
      'input--non-empty': Boolean(value),
      'input--focused': isFocused,
      'input--disabled': disabled,
    },
    `input--${state}`,
    className,
  );

  function handleChange() {
    onChange(ref.current.value, name);
  }

  function handleLabelMouseDown(event) {
    event.preventDefault();

    if (!disabled) {
      handleFocus();
    }
  }

  function handleFocus() {
    ref.current.focus();
    setIsFocused(true);
    setIsValid(true);
  }
  const EMAIL_REGEX = /\S+@\S+/;

  function handleBlur() {
    if (ref.current.name === 'email') {
      setIsValid(EMAIL_REGEX.test(ref.current.value));
    }
    ref.current.blur();
    setIsFocused(false);
  }

  const TagName = type === 'textarea' ? 'textarea' : 'input';
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
        <TagName
          type={type}
          id={id}
          ref={ref}
          rows={rows}
          className="input__input"
          value={value}
          onChange={handleChange}
          tabIndex={tabIndex}
          onBlur={handleBlur}
          onFocus={handleFocus}
          name={name}
          disabled={disabled}
          required={required}
        />
        {!isValid && name === 'email' && (
          <div className="error_message">
            <div className="error_message_pointer" />
            Адрес электронной почты должен содержать символ “@”. В адресе “
            {value}” отсутсвует символ “@”.
          </div>
        )}
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  state: 'normal',
  disabled: false,
};
