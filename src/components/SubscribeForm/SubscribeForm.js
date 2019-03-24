import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';

export function SubscribeForm({ className }) {
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('SubscribeForm handleSubmit', { email });
  }

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <Input
        value={email}
        type="email"
        onChange={setEmail}
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
