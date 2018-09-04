function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
    browser.windowHandleFullscreen()
}

Page.prototype.clickElement = function (locator) {
    browser.click(locator)
    
}
Page.prototype.waitForElementVisible = function (locator) {
    browser.waitForVisible(locator)
    
}
module.exports = new Page()