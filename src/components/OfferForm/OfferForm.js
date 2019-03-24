import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';

import './OfferForm.css';

export function OfferForm({ value, className }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [users, setUsers] = useState('1-10');
  const [agree, setAgree] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('OfferForm handleSubmit', {
      name,
      email,
      phone,
      company,
      users,
      agree,
      subscribe,
    });
  }

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="form__box">
        <Input value={name} onChange={setName} label="Как к вам обращаться" />
        <Input value={email} onChange={setEmail} label="Рабочий e-mail" />
        <Input value={phone} onChange={setPhone} label="Телефон" />
        <Input
          value={company}
          onChange={setCompany}
          label="Название компании"
        />

        <Select
          options={['1-10', '11-50', '51-100', '101-500', '500+']}
          value={users}
          onChange={setUsers}
          label="Название компании"
        />
      </div>

      <div className="form__box form__box--column">
        <Checkbox
          label="Я согласен на обработку персональных данных"
          value={agree}
          onChange={setAgree}
        />
        <Checkbox
          label="Подписаться на новостную рассылку"
          value={subscribe}
          onChange={setSubscribe}
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
