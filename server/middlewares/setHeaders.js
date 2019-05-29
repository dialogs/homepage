// Define the URLs we'll allow.
const ALLOWED_BY = /^https?:\/\/([^\/]+\.)?(dlg\.im|webvisor\.com|localhost)/;

module.exports = (req, res, next) => {
  const domain = `${req.protocol}://${req.hostname}`;

  if (ALLOWED_BY.test(domain)) {
    res.setHeader('X-Frame-Options', 'ALLOW-FROM ' + domain);
  }

  next();
};
