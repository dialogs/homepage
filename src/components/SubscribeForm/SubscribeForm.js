import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import {
  Form,
  FormFooter,
  FormInfo,
  FormErrorMessage,
  FormPendingMessage,
  FormSuccessMessage,
} from '../Form/Form';

export function SubscribeForm({
  value,
  error,
  pending,
  onSubmit,
  className,
  language,
}) {
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, form: 'subscribe', siteLanguage: language });
  }

  function handleChange(value) {
    setEmail(value);
  }

  return (
    <Form className={classes} onSubmit={handleSubmit}>
      <Input
        value={email}
        type="email"
        name="email"
        state={error ? 'error' : 'normal'}
        disabled={pending}
        onChange={handleChange}
        label={language === 'ru' ? 'Ваш e-mail' : 'Your e-mail'}
        required
      />
      <FormFooter>
        <Button
          type="submit"
          className="form__submit"
          disabled={pending || (value && value.status === 200)}
        >
          <FormattedMessage id="subscribe_submit" />
        </Button>
        <FormInfo>
          {error && <FormErrorMessage id="subscribe_error" />}
          {pending && <FormPendingMessage id="subscribe_pending" />}
          {value && value.status === 200 && (
            <FormSuccessMessage id="subscribe_success" />
          )}
        </FormInfo>
      </FormFooter>
    </Form>
  );
}
