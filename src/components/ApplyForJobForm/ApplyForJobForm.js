import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Input } from '../Input/Input';
import { FileInput } from '../FileInput/FileInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import {
  Form,
  FormFooter,
  FormInfo,
  FormErrorMessage,
  FormPendingMessage,
  FormSuccessMessage,
} from '../Form/Form';
import './ApplyForJobForm.css';

export function ApplyForJobForm({
  error,
  pending,
  value,
  onSubmit,
  className,
  cities,
  language,
}) {
  const [form, setForm] = useState({
    fio: '',
    phone: '',
    about: '',
    workemail: '',
    city: cities[0],
    resume: '',
    agree: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (form.agree) {
      onSubmit({ ...form, form: 'apply', siteLanguage: language });
    }
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function getBase64(file, callback) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      callback(reader.result);
    };
    reader.onerror = (error) => {
      console.error(error);
    };
  }

  function handleResumeChange(value) {
    getBase64(value, (fileBase64) => {
      setForm({
        ...form,
        resume: fileBase64,
      });
    });
  }

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <div className="apply__form__body">
        <div className="apply__form__twocolumns">
          <div className="apply__form__column">
            <Input
              value={form.fio}
              name="fio"
              type="text"
              onChange={handleChange}
              label={<FormattedMessage id="form_label_fio" />}
              required
            />
            <Input
              value={form.phone}
              name="phone"
              type="text"
              onChange={handleChange}
              label={<FormattedMessage id="form.phone" />}
              required
            />
          </div>
          <div className="apply__form__column">
            <Input
              value={form.workemail}
              name="workemail"
              type="email"
              onChange={handleChange}
              label={<FormattedMessage id="form.email" />}
              required
            />
            <Select
              options={cities.map((city) => {
                return {
                  label: `career.location.${city}`,
                  value: city,
                };
              })}
              value={form.city}
              name="city"
              onChange={handleChange}
              isNeedToTranslate
            />
          </div>
        </div>
        <Input
          value={form.about}
          name="about"
          type="textarea"
          rows={4}
          onChange={handleChange}
          label={<FormattedMessage id="form_label_about" />}
        />
        <div className="apply__form__fileinput">
          <FileInput onChange={handleResumeChange} />
        </div>
        <div className="apply__form__checkbox">
          <Checkbox
            label={<FormattedMessage id="form_label_agreement" />}
            value={form.agree}
            name="agree"
            onChange={handleChange}
          />
        </div>
      </div>
      <FormFooter>
        <Button
          type="submit"
          className="form__submit"
          disabled={!form.agree || pending || (value && value.status === 200)}
        >
          <FormattedMessage id="form.submit.resume" />
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
