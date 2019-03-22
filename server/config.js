function env(name, defaultValue) {
  return process.env[name] || defaultValue;
}

const isProduction = process.env['NODE_ENV'] === 'production';

module.exports = {
  isProduction,
  dialog: {
    url: env(
      'DIALOG_URL',
      'https://http.dlg.im/v1/webhooks/1c7648f8db2f20354c8299e24da1bd3aef8dc6c57ceaea6cca4c2429071b8a2b',
    ),
  },
  email_to: env('EMAIL_TO', 'info@dlg.im'),
  email: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: env('EMAIL_USER', 'bot@dlg.im'),
      pass: env('EMAIL_PASSWORD', 'zUebiL&WRJRcJWJhwfPj2YgJ'),
    },
  },
  listen: {
    port: env('PORT', 3000),
    host: env('HOST', '127.0.0.1'),
  },
  ghost: {
    endpoint: env('https://dialog-2.ghost.io'),
    apiKey: env('GHOST_API_KEY', 'eae4004a845dbabe44a0283afd'),
  },
};
