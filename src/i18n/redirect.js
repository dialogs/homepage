import React, { useEffect } from 'react';
import { withPrefix } from 'gatsby';
import browserLang from 'browser-lang';
import { languages } from './locales';

function Redirect({ location }) {
  useEffect(() => {
    const langKeys = languages.map((language) => language.value);
    const { pathname, search } = location;

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected =
        window.localStorage.getItem('language') ||
        browserLang({
          languages: langKeys,
          fallback: 'en',
        });

      const newUrl = withPrefix(`/${detected}${pathname}${search}`);
      window.localStorage.setItem('language', detected);
      window.location.replace(newUrl);
    }
  }, []);

  return <div />;
}

export default Redirect;
