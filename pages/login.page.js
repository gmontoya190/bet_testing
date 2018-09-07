var Page = require('./page');
/**
 * Module that represents the login operation in the portal. Uses
 * the general behaviour exposed in page.js
 */
var LoginPage = Object.create(Page, {
  username: {
    get: function() {
      return browser.element('[id="loginUsernameInput"]');
    },
  },
  password: {
    get: function() {
      return browser.element('[id="loginPasswordInput"]');
    },
  },
  login: {
    get: function() {
      return browser.element(
        '//div[@class="account-tab"]//a[@id="accountTabButton"]'
      );
    },
  },
  account: {
    get: function() {
      return browser.element('[id="accountTabButton"]');
    },
  },
  submit: {
    get: function() {
      return browser.element('[id="loginButton"]');
    },
  },
  depositAccount: {
    get: function() {
      return '[id="depositHeaderButtonLink"]';
    },
  },

  open: {
    value: function(url) {
      Page.open.call(this, url);
    },
  },
});

module.exports = LoginPage;
