const acceptLanguage = require('accept-language');

module.exports = (supported) => {
  acceptLanguage.languages(supported);
  const pattern = new RegExp(`^/(${supported.join('|')})`);

  return (req, res, next) => {
    const matches = pattern.exec(req.url);
    req.language = matches ? matches[1] : supported[0];
    next();
  };
};
