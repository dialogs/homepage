import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import {
  Form,
  FormBox,
  FormFooter,
  FormInfo,
  FormErrorMessage,
  FormPendingMessage,
  FormSuccessMessage,
} from '../Form/Form';

export function PartnerForm({
  pending,
  error,
  value,
  onSubmit,
  className,
  language,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    agree: true,
    subscribe: true,
  });
  function handleSubmit(event) {
    event.preventDefault();

    if (form.agree) {
      onSubmit({
        ...form,
        form: 'partner',
        siteLanguage: language,
      });
    }
  }

  function handleChange(value, name) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <Section id="partnership_form">
      <Heading level="1">
        <FormattedMessage id="partner.form.header" />
      </Heading>
      <Form className={className} onSubmit={handleSubmit}>
        <FormBox>
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
        </FormBox>
        <FormBox>
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
        </FormBox>
        <FormFooter>
          <Button
            type="submit"
            disabled={!form.agree || pending || (value && value.status === 200)}
          >
            <FormattedMessage id="send_application" />
          </Button>
          <FormInfo>
            {error && <FormErrorMessage />}
            {pending && <FormPendingMessage />}
            {value && value.status === 200 && <FormSuccessMessage />}
          </FormInfo>
        </FormFooter>
      </Form>
    </Section>
  );
}
