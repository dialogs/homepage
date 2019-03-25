import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';

import './OfferForm.css';

export function OfferForm({ onSubmit, className }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    users: '1-10',
    agree: true,
    subscribe: false,
  });

  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
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
          label="Как к вам обращаться"
        />
        <Input
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Рабочий e-mail"
        />
        <Input
          value={form.phone}
          name="phone"
          onChange={handleChange}
          label="Телефон"
        />
        <Input
          value={form.company}
          name="company"
          onChange={handleChange}
          label="Название компании"
        />

        <Select
          options={['1-10', '11-50', '51-100', '101-500', '500+']}
          value={form.users}
          name="users"
          onChange={handleChange}
          label="Название компании"
        />
      </div>

      <div className="form__box">
        <Checkbox
          label="Я согласен на обработку персональных данных"
          value={form.agree}
          name="agree"
          onChange={handleChange}
        />
        <Checkbox
          label="Подписаться на новостную рассылку"
          value={form.subscribe}
          name="subscribe"
          onChange={handleChange}
        />
      </div>

      <div className="form__footer">
        <button type="submit" className="button button--default">
          Отправить заявку
        </button>
      </div>
    </form>
  );
}
