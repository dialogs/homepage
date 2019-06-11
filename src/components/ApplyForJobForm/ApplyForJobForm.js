import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
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
  const dataRu = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                city
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  const rawData = dataRu.allMarkdownRemark.edges;
  const langslug =
    (typeof window !== 'undefined' && window.location.href.indexOf('/ru/')) >= 0
      ? '/ru/'
      : '/en/';
  const cities = rawData
    .filter((el) => el.node.fields.slug.indexOf(langslug) >= 0)
    .map((c) => c.node.frontmatter.city)
    .filter((value, index, self) => self.indexOf(value) === index);

  const classes = classNames('form', className);
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
      onSubmit({ ...form, form: 'apply' });
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
              required
            />
            <Input
              value={form.phone}
              name="phone"
              type="text"
              onChange={handleChange}
              label={<FormattedMessage id="form_label_phone" />}
              required
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
              options={cities}
              value={form.city}
              name="city"
              onChange={handleChange}
            />
          </div>
        </div>
        <Input
          value={form.about}
          name="about"
          type="text"
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
      <div className="form__footer">
        <Button
          type="submit"
          className="form__submit"
          disabled={!form.agree || pending || (value && value.status === 200)}
        >
          <FormattedMessage id="form_send" />
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
