import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { FormErrorMessage } from '../FormErrorMessage/FormErrorMessage';

export function SupportForm({ error, pending, value, onSubmit, className }) {
  const classes = classNames('form', className);
  const [form, setForm] = useState({
    email: '',
    topic: '',
    message: '',
    agree: true,
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (form.agree) {
      onSubmit({ ...form, form: 'support' });
    }
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <Input
        value={form.email}
        name="email"
        type="email"
        onChange={handleChange}
        label={<FormattedMessage id="form_label_your_email" />}
        required
      />
      <Input
        value={form.topic}
        name="topic"
        type="text"
        required
        onChange={handleChange}
        label={<FormattedMessage id="form_label_topic" />}
      />
      <Input
        value={form.message}
        name="message"
        type="textarea"
        required
        onChange={handleChange}
        rows={6}
        label={<FormattedMessage id="form_label_your_question" />}
      />
      <Checkbox
        label={<FormattedMessage id="form_label_agreement" />}
        value={form.agree}
        name="agree"
        onChange={handleChange}
      />

      <div className="form__footer">
        <Button
          type="submit"
          className="form__submit"
          disabled={!form.agree || pending || (value && value.status === 200)}
        >
          <FormattedMessage id="form_send" />
        </Button>

        <div className="form__info">
          {/*
          {!error && !pending && !value && (
            <div className="form__initial">
              Служба поддержки обычно отвечает <br />в течение 15 минут
            </div>
          )}
          */}
          {error && <FormErrorMessage />}
          {pending && (
            <div className="form__pending">
              <FormattedMessage id="form_pending" />
            </div>
          )}
          {value && value.status === 200 && (
            <div className="form__success">
              <FormattedMessage id="form_success_message" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
