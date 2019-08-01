import React, { useState, createRef } from 'react';
import classNames from 'classnames';
import { styled } from 'astroturf';
import './Input.css';

const InputErrorMessage = styled.div`
  @import '../../styles/variables.css';

  --input-error-offset: 30px;

  position: absolute;
  left: calc(-1 * var(--input-error-offset));
  background-color: var(--color-danger);
  top: 100%;
  z-index: 10;
  font-size: 18px;
  line-height: 20px;
  padding: var(--input-error-offset) var(--input-error-offset);
  right: calc(-1 * var(--input-error-offset));

  &:before {
    content: '';
    position: absolute;
    background-color: var(--color-danger);
    z-index: 10;
    top: -5px;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
  }
`;

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
  error,
  rows,
  state, // 'default' | 'success' | 'error'
  required,
  autocomplete,
  spellcheck,
}) {
  const ref = createRef();
  const [isFocused, setIsFocused] = useState(false);

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
    setIsFocused(true);
    ref.current.focus();
  }

  function handleBlur() {
    setIsFocused(false);
    ref.current.blur();
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
          autoComplete={autocomplete}
          spellCheck={spellcheck}
        />
      </div>
      {error && isFocused && <InputErrorMessage>{error}</InputErrorMessage>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  state: 'default',
  disabled: false,
  spellcheck: false,
  autocomplete: 'off',
};
