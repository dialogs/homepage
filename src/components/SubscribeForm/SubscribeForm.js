import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';

export function SubscribeForm({ onSubmit, className }) {
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('SubscribeForm handleSubmit', { email });
    onSubmit({ email });
  }

  function handleChange(value) {
    setEmail(value);
  }

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <Input
        value={email}
        type="email"
        name="email"
        onChange={handleChange}
        label="Ваш e-mail"
      />
      <div className="form__footer">
        <button type="submit" className="button button--default">
          Подписаться
        </button>
      </div>
    </form>
  );
}
