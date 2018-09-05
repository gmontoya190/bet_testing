// login.page.js
var Page = require('./page')

var BetPlacePage = Object.create(Page, {
  
    /**
     * define elements
     */
    betContainerSelector: { get: function () { return '//div[@id="bets-container-singles"]'; } },
    betSlipInput: { get: function () { return browser.element('//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input'); } },
    placeBet:     { get: function () { return browser.element('//*[@id="betslip-footer-actions"]/ul/li[3]/input'); } },
    noticeBoxBetPlaced: { get: function () { return browser.element('//div[@id="receipt-notice-box"]'); } },
    openBetsContainer: { get: function () { return browser.element('//*[@id="openbets-tab"]/a/span[2]'); } },
    notificationCashIn: { get: function () { return browser.element('//button[@data-test-id="obb-cash-in-notification-button"]'); } },
    openBetsContent: { get: function () { return '//div[@id="openbets-content"]'; } },
    cashInConfirmationContainer: { get: function () { return '//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]'; } },
    confirmCashIn: { get: function () { return browser.element('//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]'); } },
    hearderBetCashIn: { get: function () { return browser.element('//*[@id="open-bets"]//span[@class="cashed-in-header__text"]'); } },
    
    cashInJustOpenBet: { value: function() {
        var betsOpens = browser.elements('//div[@id="openbets-content"]//button[@data-test-id="obb-cash-in-button"]')
        betsOpens.value[0].click();
    } },
});

module.exports = BetPlacePage;