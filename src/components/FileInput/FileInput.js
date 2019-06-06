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

  if (FileInput.value == undefined) {
    FileInput.label = 'Принять резюме';
  } else {
    FileInput.label = FileInput.value;
  }

  function handleChange() {
    onChange(ref.current.files[0], name);
    FileInput.value = ref.current.files[0].name;
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
        name=""
      />
      <label htmlFor="fileElem">{FileInput.label}</label>
    </div>
  );
}
