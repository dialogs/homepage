import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';

export function SupportForm({ onSubmit, className }) {
  const classes = classNames('form', className);
  const [form, setForm] = useState({
    email: '',
    topic: '',
    message: '',
    agree: true,
  });

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
    <form onSubmit={handleSubmit} className={classes}>
      <Input
        value={form.email}
        name="email"
        type="email"
        onChange={handleChange}
        label="Ваш e-mail"
      />

      <Input
        value={form.topic}
        name="topic"
        type="text"
        onChange={handleChange}
        label="Тема"
      />

      <Input
        value={form.message}
        name="message"
        type="textarea"
        onChange={handleChange}
        rows={6}
        label="Опишите ваш вопрос"
      />

      <Checkbox
        label="Я согласен на обработку персональных данных"
        value={form.agree}
        name="agree"
        onChange={handleChange}
      />

      <div className="form__footer">
        <button type="submit" className="button button--default">
          Отправить
        </button>

        <div className="information">
          Служба поддержки обычно отвечает в течение 15 минут
        </div>
      </div>
    </form>
  );
}
