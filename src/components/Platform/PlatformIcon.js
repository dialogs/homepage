import React from 'react';
import classnames from 'classnames';
import ImageFormatted from '../ImageFormatted';

// export type PlatformIconProps = {
//   column: 'one' | 'two' | ' three',
//   type: 'messenger' | 'functions' | ' integrations',
// };

export function PlatformIcon({ image, type, text, className }) {
  const iconAlt = text.props.id;

  return (
    <div
      className={classnames(
        'platform_icon',
        `platform_icon--${type}`,
        className,
      )}
    >
      <ImageFormatted
        imgClass="platform_icon__image"
        src={image}
        altLangId={iconAlt}
      />
      <span className="platform_icon__text">{text}</span>
    </div>
  );
}

PlatformIcon.defaultProps = {
  type: 'functions',
};
