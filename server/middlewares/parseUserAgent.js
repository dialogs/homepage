const usParser = require('ua-parser-js');

module.exports = (req, res, next) => {
  req.userAgent = usParser(req.headers['user-agent']);
  next();
};
