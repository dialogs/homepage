import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { FormErrorMessage } from '../FormErrorMessage/FormErrorMessage';

import './OfferForm.css';

export function OfferForm({ pending, error, value, onSubmit, className }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...form, form: 'offer' });
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="form__box">
        <Input
          value={form.name}
          name="name"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_name" />}
          required
        />
        <Input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_email" />}
          required
        />
        <Input
          type="tel"
          value={form.phone}
          name="phone"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_phone" />}
          required
        />
        <Input
          value={form.company}
          name="company"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_company" />}
          required
        />

        <Select
          options={['1-100', '101-500', '501-1000', '1000+']}
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
        <Button type="submit" className="form__submit">
          <FormattedMessage id="send_application" />
        </Button>
        <div className="form__info">
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
