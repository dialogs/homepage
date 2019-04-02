import React from 'react';

export function FormErrorMessage() {
  return (
    <div className="form__error">
      Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами через{' '}
      <a href="mailto:info@dlg.im">info@dlg.im</a> или{' '}
      <a href="tel:+78007758202">+7(800)775-82-02</a>
    </div>
  );
}
