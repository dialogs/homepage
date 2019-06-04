import React, { useState, createRef } from 'react';
import { FormattedMessage } from 'react-intl';

export function FileInput({
  type,
  id,
  value,
  name,
  label,
  onChange,
  required,
}) {
  const ref = createRef();

  function handleChange() {
    onChange(ref.current.value, name);
  }

  return (
    <div>
      <img src="/images/jobs/jobs-attachment.png" />
      <input
        type="file"
        ref={ref}
        id="fileElem"
        multiple
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label htmlFor="fileElem">
        <FormattedMessage id="form_label_attach_resume" />
      </label>
    </div>
  );
}
