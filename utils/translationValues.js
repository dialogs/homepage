const ru = require('../src/i18n/ru.json');
const en = require('../src/i18n/en.json');

for (const property in ru) {
  console.log(ru[property]);
}

for (const property in en) {
  console.log(en[property]);
}
