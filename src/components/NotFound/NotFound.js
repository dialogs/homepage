import React from 'react';
import { Link } from 'gatsby';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import './NotFound.css';

export function NotFound() {
  return (
    <Section className="not_found">
      <div className="not_found__wrapper">
        <Heading level="1" className="not_found__header">
          Мы не можем <br />
          найти страницу, <br />
          которую вы ищете
        </Heading>
        <p className="not_found__text">
          Пожалуйста, проверьте, что адрес страницы <br />
          написан правильно, и затем повторите <br />
          попытку снова.
        </p>
        <Link to="/" className="button button--default">
          Перейти на главную
        </Link>
        <img src="/images/artboard1.png" alt="" className="not_found__image" />
      </div>
    </Section>
  );
}
