import React, { createRef } from 'react';
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
    onChange(ref.current.files[0], name);
  }

  return (
    <div>
      <img
        src="/images/jobs/jobs-attachment.png"
        style={{ marginRight: '10px' }}
      />
      <input
        type="file"
        ref={ref}
        id="fileElem"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label htmlFor="fileElem">
        <FormattedMessage id="form_label_attach_resume" />
      </label>
    </div>
  );
}
