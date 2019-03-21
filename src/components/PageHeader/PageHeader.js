import React from 'react';
import classnames from 'classnames';

import './PageHeader.css';

export function PageHeader(props) {
  const className = classnames('page_header', props.className);

  return <h1 className={className}>{props.children}</h1>;
}
