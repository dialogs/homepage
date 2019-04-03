module.exports = {
  localeData: [
    ...require('react-intl/locale-data/en'),
    ...require('react-intl/locale-data/ru'),
  ],
  messages: {
    en: require('./en'),
    ru: require('./ru'),
  },
  languages: [
    { value: 'en', text: 'English' },
    { value: 'ru', text: 'Русский' },
  ],
};
