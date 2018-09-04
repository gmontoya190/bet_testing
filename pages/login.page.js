// login.page.js
var Page = require('./page')

var LoginPage = Object.create(Page, {
  
    /**
     * define elements
     */
    username: { get: function () { return browser.element('[id="loginUsernameInput"]'); } },
    password: { get: function () { return browser.element('[id="loginPasswordInput"]'); } },
    login:     { get: function () { return browser.element('//div[@class="account-tab"]//a[@id="accountTabButton"]'); } },
    account:    { get: function () { return browser.element('[id="accountTabButton"]'); } },
    submit:  { get: function () { return browser.element('[id="loginButton"]'); } },
    accountTabSelector:  { get: function () { return '[id="accountTabButton"]' } },


    /**
     * define or overwrite page methods
     */
    open: { value: function(url) {
        Page.open.call(this, url);
    } },
});

module.exports = LoginPage;