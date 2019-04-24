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

  return (
    <Helmet>
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {typeof window !== 'undefined'
        ? [
            <meta property="og:url" content={window.location.href} />,
            <meta
              property="og:image"
              content={`${window.location.origin}${ogImageSrc}`}
            />,
          ]
        : null}
      <meta property="og:site_name" content="dialog" />
    </Helmet>
  );
}
