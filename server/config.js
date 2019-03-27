require('dotenv').config();

function env(name, defaultValue) {
  return process.env[name] || defaultValue;
}

const isDev = process.env['NODE_ENV'] !== 'production';

module.exports = {
  isDev,
  dialog: {
    webhook: env('DIALOG_WEBHOOK'),
  },
  email_to: env('EMAIL_TO', 'info@dlg.im'),
  email: {
    host: env('EMAIL_HOST', 'smtp.gmail.com'),
    port: env('EMAIL_PORT', 465),
    secure: true,
    auth: {
      user: env('EMAIL_USER'),
      pass: env('EMAIL_PASSWORD'),
    },
  },
  server: {
    port: env('PORT', isDev ? 3010 : 3000),
    host: env('HOST', '0.0.0.0'),
  },
  ghost: {
    endpoint: env('GHOST_ENDPOINT'),
    apiKey: env('GHOST_API_KEY'),
  },
};
