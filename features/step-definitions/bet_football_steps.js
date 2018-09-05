const expect = require('chai').expect;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {And} = require('cucumber');
var LoginPage = require('../../pages/login.page');

Given(/^I open up the application "([^"]*)"$/, function (url) {
 LoginPage.open(url);
 
});
When(/^I click on login button/, function () {
    LoginPage.login.click();
});
When(/^I fill user and password/, function () {
    LoginPage.username.setValue('WHITA_opex7');
    LoginPage.password.setValue('0p3x2017');
    LoginPage.submit.click();
});
Then(/^I should be logged into the site/, function () {
LoginPage.waitForElementVisible(LoginPage.accountTabSelector);
expect( LoginPage.account.isVisible()).to.eql(true);
});
Given(/^I go for the football competions/, function () {
  // we select the football competions and on that the premier league
  browser.waitForVisible('//li[@id="nav-football"]//a[@title="Football"]');
  browser.click('//li[@id="nav-football"]//a[@title="Football"]')
  browser.waitForVisible('//li[@id="nav-football-competitions"]//a[@title="football-competitions"]')
  browser.click('//li[@id="nav-football-competitions"]//a[@title="football-competitions"]')
  browser.click('.cookie-disclaimer__button')
  browser.waitForExist('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]')
  browser.moveToObject('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]')
  browser.click('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]')
  browser.click('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]')

});
When(/^I select a game of english premier league and select home team to win/, function () {
  // Look for the first game on the premier and list the options to bet
  var betHomeTeamSelected = false;
  browser.waitForVisible('//div[@data-test-id="events-group"]')
  var listGames = browser.elements('//div[@data-test-id="events-group"]//div[@class="sp-o-market--three-cols"]//article')
  if (listGames.value.length >0) 
  {
      listGames.value[0].click();
  }
  else {
      console.log("there are no events for the english premier league at this point")
  }
   
  var betsList = listGames.value[0].elements('//section[@class="sp-o-market__buttons"]//button')
  if(betsList.value.length < 0)
    {
      console.log("Looks like there are no local,draw and visitor bets available")
    } else {
      betsList.value[0].click();
      betHomeTeamSelected = true;
    }
    expect(betHomeTeamSelected).to.eql(true);   
});
When(/^I bet some value for the home team/, function () {
  browser.waitForVisible('//div[@id="bets-container-singles"]')
  browser.click('//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input')
  browser.setValue('//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input','0.05')
  browser.click('//*[@id="betslip-footer-actions"]/ul/li[3]/input');
  var isBetPlaced = browser.isVisible('//div[@id="receipt-notice-box"]')
  expect(isBetPlaced).to.eql(true); 
});
When(/^I accept the odds and returns offered/, function () {
  var betIsConfirmed = false;
  browser.click('//*[@id="openbets-tab"]/a/span[2]')
  browser.click('//button[@data-test-id="obb-cash-in-notification-button"]')
  browser.waitForVisible('//div[@id="openbets-content"]')

  var betsOpens = browser.elements('//div[@id="openbets-content"]//button[@data-test-id="obb-cash-in-button"]')
  betsOpens.value[0].click();
  browser.waitForVisible('//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]')
  browser.click('//div[@class="cash-in-confirmation__button-container"]/button[@data-test-id="obb-cash-in-confirm-button"]')
  var betIsConfirmed = browser.isVisible('//*[@id="open-bets"]//span[@class="cashed-in-header__text"]')
  expect(betIsConfirmed).to.eql(true); 
});
