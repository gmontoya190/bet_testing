var Page = require('./page');
/**
 * Module that represents the iteraction with placing a bet
 * in the portal, for mobile and desktop configuration. Uses
 * the general behaviour exposed in page.js
 */
var BetPlacePage = Object.create(Page, {
  betContainerSelector: {
    get: function() {
      return '//div[@id="bets-container-singles"]';
    },
  },
  betSlipInput: {
    get: function() {
      return browser.element(
        '//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input'
      );
    },
  },
  placeBet: {
    get: function() {
      return browser.element(
        '//*[@id="betslip-footer-actions"]/ul/li[3]/input'
      );
    },
  },
  noticeBoxBetPlaced: {
    get: function() {
      return browser.element('//div[@id="receipt-notice-box"]');
    },
  },
  openBetsContainer: {
    get: function() {
      return browser.element('//*[@id="openbets-tab"]/a/span[2]');
    },
  },
  notificationCashIn: {
    get: function() {
      return browser.element(
        '//button[@data-test-id="obb-cash-in-notification-button"]'
      );
    },
  },
  openBetsContent: {
    get: function() {
      return '//div[@id="openbets-content"]';
    },
  },
  cashInConfirmationContainer: {
    get: function() {
      return '//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]';
    },
  },
  confirmCashIn: {
    get: function() {
      return browser.element(
        '//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]'
      );
    },
  },
  hearderBetCashIn: {
    get: function() {
      return browser.element(
        '//*[@id="open-bets"]//span[@class="cashed-in-header__text"]'
      );
    },
  },

  betSlipFlyerFooterSelecMob: {
    get: function() {
      return '//div[@id="toolbar"]//div[@id="betslip-btn-toolbar"]//span[@class="toolbar__badge toolbar__badge--fly-in"]';
    },
  },
  betSlipFooterSelecMob: {
    get: function() {
      return '//div[@id="toolbar"]//div[@id="betslip-btn-toolbar"]//a';
    },
  },
  betSlipFooterMob: {
    get: function() {
      return browser.element(
        '//div[@id="toolbar"]//div[@id="betslip-btn-toolbar"]//a'
      );
    },
  },
  placeBetKeyboardMob: {
    get: function() {
      return browser.element('//*[@id="numberpad"]/div[6]/button');
    },
  },

  cashInJustOpenBet: {
    value: function() {
      var betsOpens = browser.elements(
        '//div[@id="openbets-content"]//button[@data-test-id="obb-cash-in-button"]'
      );
      betsOpens.value[0].click();
    },
  },
  /**
   * Place the monetary value given in string
   * and touch every value in the keyboard
   * @param {String} monetaryValue
   * @returns {Boolean} value not correct and not placed
   */
  placeValueBetMobile: {
    value: function(monetaryValue) {
      var isValueCorrect = false;
      for (i = 0; i < monetaryValue.length; i++) {
        if (!this.validateValue(monetaryValue.charAt(i))) {
          isValueCorrect = false;
          break;
        }
        isValueCorrect = true;
      }
      return isValueCorrect;
    },
  },
  /**
   * Gets a char and validate if exists in the keyboard
   * and touch it on the keyboard
   * @param {String} charValue
   * @returns {Boolean} if value exists in the keyboard
   */
  validateValue: {
    value: function(charValue) {
      var charIsCorrect = true;
      switch (charValue) {
        case '0':
          browser.touch('//*[@id="numberpad"]/div[4]/button[2]');
          break;
        case '1':
          browser.touch('//*[@id="numberpad"]/div[1]/button[1]');
          break;
        case '2':
          browser.touch('//*[@id="numberpad"]/div[1]/button[2]');
          break;
        case '3':
          browser.touch('//*[@id="numberpad"]/div[1]/button[3]');
          break;
        case '4':
          browser.touch('//*[@id="numberpad"]/div[2]/button[1]');
          break;
        case '5':
          browser.touch('//*[@id="numberpad"]/div[2]/button[2]');
          break;
        case '6':
          browser.touch('//*[@id="numberpad"]/div[2]/button[3]');
          break;
        case '7':
          browser.touch('//*[@id="numberpad"]/div[3]/button[1]');
          break;
        case '8':
          browser.touch('//*[@id="numberpad"]/div[3]/button[2]');
          break;
        case '9':
          browser.touch('//*[@id="numberpad"]/div[3]/button[3]');
          break;
        case '.':
          browser.touch('//*[@id="numberpad"]/div[4]/button[1]');
          break;
        default:
          console.log(
            'One of the digits is not valid, please review the value to bet'
          );
          charIsCorrect = false;
          break;
      }
      return charIsCorrect;
    },
  },
});

module.exports = BetPlacePage;
