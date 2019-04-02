import React, { useState } from 'react';
import classNames from 'classnames';

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
    onSubmit({ ...form, form: 'support' });
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
        required
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
        <Button type="submit" className="form__submit">
          Отправить
        </Button>

        <div className="form__info">
          {!error && !pending && !value && (
            <div className="form__initial">
              Служба поддержки обычно отвечает <br />в течение 15 минут
            </div>
          )}
          {error && <FormErrorMessage />}
          {pending && <div className="form__pending">Отправка сообщения.</div>}
          {value && value.status === 200 && (
            <div className="form__success">
              Ваше обращение успешно отправлено. С вами свяжутся в ближайшее
              время.
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
