'use strict';

const parseAttrs = require('../../utils/parseAttrs');

const t = require('engine/i18n');

t.requirePhrase('engine/markit');

module.exports = function(md) {

  md.renderer.rules.blocktag_recent = function(tokens, idx, options, env, slf) {

    let token = tokens[idx];

    let browser = token.blockTagAttrs.browser;

    if (browser === 'none') {
      browser = t('markit.recent.browser.none')
    } else if (browser === 'new') {
      browser = t('markit.recent.browser.new')
    } else if (browser) {
      browser = t('markit.recent.browser.value', {browser});
    } else {
      browser = '';
    }

    return `<div class="important important_warn">
            <div class="important__header"><span class="important__type">${t('markit.recent.recent')}</span></div>
            <div class="important__content">
            ${t('markit.recent.recent_addition')}
            ${browser}
            </div></div>\n`;
  };

};
