const ru = require('../src/i18n/ru.json');
const en = require('../src/i18n/en.json');

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

function printKeyValues(object) {
  for (const property in object) {
    console.log(object[property]);
  }
}

printKeyValues(flattenMessages(ru));
printKeyValues(flattenMessages(en));
