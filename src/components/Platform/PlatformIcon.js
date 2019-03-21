import React from 'react';
import classnames from 'classnames';

// export type PlatformIconProps = {
//   column: 'one' | 'two' | ' three',
// };

export function PlatformIcon({ image, column, text, className }) {
  return (
    <div
      className={classnames(
        'platform_icon',
        `platform_icon--${column}`,
        className,
      )}
    >
      <img src={image} alt={text} className="platform_icon__image" />
      <span className="platform_icon__text">{text}</span>
    </div>
  );
}

PlatformIcon.defaultProps = {
  column: 'one',
};
