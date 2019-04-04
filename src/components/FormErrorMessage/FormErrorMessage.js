import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

export function FormErrorMessage() {
  return (
    <div className="form__error">
      <FormattedHTMLMessage id="form_error_message" />
    </div>
  );
}
