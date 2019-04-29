import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { FormattedMessage } from 'react-intl';

export function SubscribeForm({ value, error, pending, onSubmit, className }) {
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);
  const locale =
    typeof window !== 'undefined' && window.location.href.indexOf('/ru/') > 0
      ? 'ru'
      : 'en';

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
        label={locale === 'ru' ? 'Ваш e-mail' : 'Your e-mail'}
        required
      />
      <div className="form__footer">
        <Button
          type="submit"
          className="form__submit"
          disabled={pending || (value && value.status === 200)}
        >
          <FormattedMessage id="subscribe_submit" />
        </Button>
        <div className="form__info">
          {error && (
            <div className="form__error">
              <FormattedMessage id="subscribe_error" />
            </div>
          )}
          {pending && (
            <div className="form__pending">
              <FormattedMessage id="subscribe_pending" />
            </div>
          )}
          {value && value.status === 200 && (
            <div className="form__success">
              <FormattedMessage id="subscribe_success" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
