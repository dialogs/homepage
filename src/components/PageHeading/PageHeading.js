import React from 'react';
import classnames from 'classnames';

import './PageHeading.css';

export function PageHeading(props) {
  const className = classnames('page_header', props.className);

  return <h1 className={className}>{props.children}</h1>;
}
