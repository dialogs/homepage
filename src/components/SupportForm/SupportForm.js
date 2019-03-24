import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';

export function SupportForm({ className }) {
  const classes = classNames('form', className);
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', { email, topic, message, agree });
  }

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <Input value={email} type="text" onChange={setEmail} label="Ваш e-mail" />

      <Input value={topic} type="email" onChange={setTopic} label="Тема" />

      <Input
        value={message}
        type="textarea"
        onChange={setMessage}
        rows={6}
        label="Опишите ваш вопрос"
      />

      <Checkbox
        label="Я согласен на обработку персональных данных"
        value={agree}
        onChange={setAgree}
      />

      <div className="form-item support__form-item support__form-item__button">
        <button type="submit" className="button button--default">
          Отправить
        </button>
      </div>

      <div className="form-item support__form-item support__form-item__answer-time">
        <span className="support__answer-time">
          Служба поддержки обычно отвечает в течение 15 минут
        </span>
      </div>
    </form>
  );
}
