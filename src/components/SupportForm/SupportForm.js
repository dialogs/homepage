import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import {
  Form,
  FormFooter,
  FormInfo,
  FormErrorMessage,
  FormPendingMessage,
  FormSuccessMessage,
} from '../Form/Form';

export function SupportForm({
  error,
  pending,
  value,
  onSubmit,
  className,
  language,
}) {
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
      onSubmit({ ...form, form: 'support', siteLanguage: language });
    }
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <Form onSubmit={handleSubmit} className={classes}>
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

      <FormFooter>
        <Button
          type="submit"
          className="form__submit"
          disabled={!form.agree || pending || (value && value.status === 200)}
        >
          <FormattedMessage id="form_send" />
        </Button>

        <FormInfo>
          {error && <FormErrorMessage />}
          {pending && <FormPendingMessage />}
          {value && value.status === 200 && <FormSuccessMessage />}
        </FormInfo>
      </FormFooter>
    </Form>
  );
}
