import React from 'react';
import Helmet from 'react-helmet';

export function FormattedMetaTags({
  intl: { messages },
  titleId = 'meta_title_default',
  descriptionId = 'meta_description_default',
}) {
  const title = messages[titleId];
  const description = messages[descriptionId];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
