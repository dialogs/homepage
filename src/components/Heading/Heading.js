import React from 'react';
import './Heading.css';

export function Heading({ level = '1', children }) {
  function getTagName() {
    switch (level) {
      case '1':
        return 'h1';
      case '2':
        return 'h2';
      case '4':
        return 'h4';
      case '5':
        return 'h5';
      case '6':
        return 'h6';

      case '3':
      default:
        return 'h3';
    }
  }
  const TagName = getTagName();

  return <TagName className="heading">{children}</TagName>;
}
