import React, { createRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

export function FileInput({ onChange, required }) {
  const ref = createRef();
  const [fileName, setFileName] = useState(null);

  function handleChange() {
    onChange(ref.current.files[0]);
    setFileName(ref.current.files[0].name);
  }

  return (
    <div>
      <img
        src="/images/jobs/jobs-attachment.png"
        style={{ marginRight: '10px' }}
        alt=""
      />
      <input
        type="file"
        ref={ref}
        id="fileElem"
        style={{ display: 'none' }}
        multiple={false}
        required={required}
        onChange={handleChange}
        name=""
      />
      <FormattedMessage id="attach_resume">
        {(label) => {
          return <label htmlFor="fileElem">{fileName || label}</label>;
        }}
      </FormattedMessage>
    </div>
  );
}

FileInput.defaultProps = {
  required: false,
};
