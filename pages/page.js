function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
}

Page.prototype.clickElement = function (locator) {
    browser.click(locator)
    
}
Page.prototype.waitForElementVisible = function (locator) {
    browser.waitForVisible(locator)
    
}
Page.prototype.clickCookiesDisclaimer = function (locator) {
    browser.click('.cookie-disclaimer__button')
    
}

module.exports = new Page()