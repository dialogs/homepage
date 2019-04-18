import React from 'react';
import Helmet from 'react-helmet';

export function FormattedOpenGraph({
  intl: { messages },
  ogType = 'website',
  idOgTitle = 'og_title_default',
  idOgDescription = 'og_description_default',
  ogImageSrc = '/images/dialog.jpg',
}) {
  const ogTitle = messages[idOgTitle];
  const ogDescription = messages[idOgDescription];
  let ogUrl;
  let ogImage;

  if (typeof window !== `undefined`) {
    ogUrl = window.location.href;
    ogImage = `${window.location.origin}${ogImageSrc}`;
  }

  return (
    <Helmet>
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="dialog" />
    </Helmet>
  );
}
