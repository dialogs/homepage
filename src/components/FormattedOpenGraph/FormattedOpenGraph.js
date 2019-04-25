import React from 'react';
import Helmet from 'react-helmet';

export function FormattedOpenGraph({
  intl: { messages },
  ogType,
  idOgTitle,
  idOgDescription,
  ogImageSrc,
  url,
  path,
}) {
  const ogTitle = messages[idOgTitle] || idOgTitle;
  const ogDescription = messages[idOgDescription] || idOgDescription;

  return (
    <Helmet>
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="dialog" />
      {url
        ? [
            <meta property="og:url" content={`${url}${path}`} key="url" />,
            <meta
              property="og:image"
              content={`${url}${ogImageSrc}`}
              key="image"
            />,
          ]
        : null}
    </Helmet>
  );
}

FormattedOpenGraph.defaultProps = {
  ogType: 'website',
  idOgTitle: 'og_title_default',
  idOgDescription: 'og_description_default',
  ogImageSrc: '/images/dialog.jpg',
};
