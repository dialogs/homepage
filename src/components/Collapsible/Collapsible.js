import React, { useState } from 'react';
import classnames from 'classnames';

import './Collapsible.css';

export function Collapsible({
  title,
  children,
  titleClassName,
  contentClassName,
  className,
}) {
  const [isOpen, setOpen] = useState(false);

  const classes = classnames(
    'collapsible',
    {
      'collapsible--open': isOpen,
    },
    className,
  );
  const titleClasses = classnames('collapsible__title', titleClassName);
  const contentClasses = classnames('collapsible__content', contentClassName);

  function toggleOpen() {
    setOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className={classes}>
      <div className={titleClasses} onClick={toggleOpen}>
        {title}
      </div>
      <div className={contentClasses}>{children}</div>
    </div>
  );
}
