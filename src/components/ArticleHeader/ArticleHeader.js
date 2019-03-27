import React from 'react';
import classnames from 'classnames';

import './ArticleHeader.css';

export function ArticleHeader(props) {
  const className = classnames('article_header', props.className);

  return <h1 className={className}>{props.children}</h1>;
}
