let lang = require('config').lang;

switch(lang) {
  case 'ru':
    module.exports = require('./ru');
    break;
  case 'en':
  case 'tr':
    // I must transliterate at least cyrillic, because
    // of  .replace(/[^a-zа-яё0-9-]/gi, '')
    // in user.js model
    // so it leaves cyriliic chars "as is" in the profile
    module.exports = require('./ru'); // not sure what to use here
    break;
  case 'ja':
    module.exports = require('./ja');
    break;
  case 'zh':
    module.exports = require('./zh');
    break;
  default:
    throw new Error("No transliteration module for language " + lang);
}
