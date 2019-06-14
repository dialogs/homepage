const ru = require('../src/i18n/locales/ru');
const en = require('../src/i18n/locales/en');

for (const property in ru) {
  console.log(ru[property]);
}

for (const property in en) {
  console.log(en[property]);
}
