import React from 'react';

import { Container } from '../components/Container/Container';

export default () => (
  <Container>
    <section className="page not_found">
      <h1>404</h1>
      <h4>Page not found</h4>
      <div>Что-то пошло не так.</div>
      <div>
        Попробуйте{' '}
        <a href="/" className="link--default">
          снова
        </a>
      </div>
    </section>
  </Container>
);
