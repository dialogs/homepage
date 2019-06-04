import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Input } from '../Input/Input';
import { FileInput } from '../FileInput/FileInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

import { FormErrorMessage } from '../FormErrorMessage/FormErrorMessage';

export function ApplyForJobForm({
  error,
  pending,
  value,
  onSubmit,
  className,
}) {
  const classes = classNames('form', className);
  const [form, setForm] = useState({
    fio: '',
    phone: '',
    aboutme: '',
    workemail: '',
    city: '',
    files: '',
    agree: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    //onSubmit({ ...form, form: 'apply' });
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleFiles(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <div className="apply__form__body">
        <div className="apply__form__twocolumns">
          <div className="apply__form__column">
            <Input
              value={form.fio}
              name="fio"
              type="text"
              onChange={handleChange}
              label={<FormattedMessage id="form_label_fio" />}
            />
            <Input
              value={form.phone}
              name="phone"
              type="text"
              onChange={handleChange}
              label={<FormattedMessage id="form_label_phone" />}
            />
          </div>
          <div className="apply__form__column">
            <Input
              value={form.workemail}
              name="workemail"
              type="email"
              onChange={handleChange}
              label={<FormattedMessage id="form_label_email" />}
              required
            />
            <Select
              options={['Москва', 'Санкт-Петербург']}
              value={form.city}
              name="city"
              onChange={handleChange}
            />
          </div>
        </div>
        <Input
          value={form.aboutme}
          name="aboutme"
          type="text"
          onChange={handleChange}
          label={<FormattedMessage id="form_label_aboutme" />}
        />
        <FileInput name="files" onChange={handleFiles} />

        <Checkbox
          label={<FormattedMessage id="form_label_agreement" />}
          value={form.agree}
          name="agree"
          onChange={handleChange}
        />
      </div>
      <div className="form__footer">
        <Button
          type="submit"
          className="form__submit"
          disabled={pending || (value && value.status === 200)}
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
