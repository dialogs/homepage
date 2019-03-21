import React from 'react';
import classnames from 'classnames';

export function PlatformIcon({ image, text, className }) {
  return (
    <div className={classnames('platform_icon', className)}>
      <img src={image} alt={text} className="platform_icon__image" />
      <span className="platform_icon__text">{text}</span>
    </div>
  );
}
