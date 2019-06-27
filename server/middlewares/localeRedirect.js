const acceptLanguage = require('accept-language');
const gatsbyExpress = require('../gatsby-express.json');

module.exports = (supported) => {
  acceptLanguage.languages(supported);
  const pagesToRedirect = [];

  gatsbyExpress.pages.forEach((page) => {
    const pattern = new RegExp(`^/(${supported.join('|')})`);
    const matches = pattern.exec(page.path);

    if (!matches) {
      pagesToRedirect.push(page.path);

      if (!(page.path === '/' || page.path.includes('.html'))) {
        pagesToRedirect.push(page.path.replace(/\/$/, ''));
      }
    }
  });

  return (req, res, next) => {
    if (pagesToRedirect.includes(req.url)) {
      const language = acceptLanguage.get(req.header('accept-language'));
      const suffix = req.url.replace(/\/$/, '');
      res.redirect(`/${language}${suffix}`);
    } else {
      next();
    }
  };
};
