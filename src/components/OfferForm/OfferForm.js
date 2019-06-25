import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { FormErrorMessage } from '../FormErrorMessage/FormErrorMessage';

import './OfferForm.css';

export function OfferForm({
  pending,
  error,
  value,
  onSubmit,
  className,
  flag = 'sales',
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    users: '1-100',
    agree: true,
    subscribe: false,
  });

  const classes = classNames('form', className);
  const EMAIL_REGEX = /\S+@\S+/;

  function handleSubmit(event) {
    event.preventDefault();

    if (form.agree) {
      onSubmit({ ...form, form: 'offer', flag: flag });
    }
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <form noValidate className={classes} onSubmit={handleSubmit}>
      <div className="form__box">
        <Input
          value={form.name}
          name="name"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_name" />}
        />
        <Input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_email" />}
        />
        <Input
          type="tel"
          value={form.phone}
          name="phone"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_phone" />}
        />
        <Input
          value={form.company}
          name="company"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_company" />}
        />
        <Select
          options={[
            {
              label: '1-100',
              value: '1-100',
            },
            {
              label: '101-500',
              value: '101-500',
            },
            {
              label: '501-1000',
              value: '501-1000',
            },
            {
              label: '1000+',
              value: '1000+',
            },
          ]}
          value={form.users}
          name="users"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_amount" />}
          required
        />
      </div>

      <div className="form__box">
        <Checkbox
          label={<FormattedMessage id="form_label_agreement" />}
          value={form.agree}
          name="agree"
          onChange={handleChange}
        />
        <Checkbox
          label={<FormattedMessage id="form_label_subscribe" />}
          value={form.subscribe}
          name="subscribe"
          onChange={handleChange}
        />
      </div>

      <div className="form__footer">
        <Button
          type="submit"
          className="form__submit"
          pending={pending}
          valueStatus={value}
          error={error}
          disabled={
            !form.agree ||
            !form.company ||
            !form.email ||
            !form.phone ||
            !form.name ||
            !EMAIL_REGEX.test(form.email)
          }
        >
          <FormattedMessage id="send_application" />
        </Button>
        <div className="form__info" />
      </div>
    </form>
  );
}
