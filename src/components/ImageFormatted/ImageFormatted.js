import React from 'react';

export function ImageFormatted({
  intl: { messages },
  imgClass,
  src,
  srcSet,
  altLangId,
}) {
  const alt = messages[altLangId];

  return <img className={imgClass} src={src} srcSet={srcSet} alt={alt} />;
}
