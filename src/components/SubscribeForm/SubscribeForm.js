import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function SubscribeForm({ value, error, pending, onSubmit, className }) {
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
      <div className="form__footer">
        <Button type="submit" className="form__submit" disabled={pending}>
          Подписаться
        </Button>
        <div className="form__info">
          {error && (
            <div className="form__error">
              Что-то пошло не так. Попробуйте снова.
            </div>
          )}
          {pending && <div className="form__pending">Подписка</div>}
          {value && value.status === 200 && (
            <div className="form__success">Вы успешно подписаны.</div>
          )}
        </div>
      </div>
    </form>
  );
}
