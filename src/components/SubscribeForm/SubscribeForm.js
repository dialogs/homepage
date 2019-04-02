import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function SubscribeForm({ value, error, pending, onSubmit, className }) {
  console.log(value, error, pending);
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, form: 'subscribe' });
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
        state={error ? 'error' : 'normal'}
        disabled={pending}
        onChange={handleChange}
        label="Ваш e-mail"
      />
      {error && <div className="form__error">Something went wrong</div>}
      <div className="form__footer">
        <Button type="submit" disabled={pending}>
          Подписаться
        </Button>
        {pending && <div className="form__pending">Submit in progress</div>}
      </div>
    </form>
  );
}
