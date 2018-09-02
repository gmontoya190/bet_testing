const expect = require('chai').expect;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');

Given(/^I open up the application "([^"]*)"$/, function (url) {
  browser.url(url)
  browser.windowHandleFullscreen();
});
When(/^I click on login button/, function () {
  browser.click('//div[@class="account-tab"]//a[@id="accountTabButton"]')
  browser.waitForExist('[id="account-section"]');
});
When(/^I should see user and password field exist/, function () {
  var isUserFieldVisible = browser.isVisible('[id="loginUsernameInput"]');
  expect(isUserFieldVisible).to.eql(true);
  var isPasswordVisible = browser.isVisible('[id="loginPasswordInput"]');
  expect(isPasswordVisible).to.eql(true);
});
When(/^I fill user and password/, function () {
  browser.click('[id="loginUsernameInput"]')
  browser.setValue('[id="loginUsernameInput"]','WHITA_opex7');
  browser.click('[id="loginPasswordInput"]')
  browser.setValue('[id="loginPasswordInput"]','0p3x2017');
});
When(/^I click on button login/, function () {
  browser.click('[id="loginButton"]')
  var isAccountInfoVisible = browser.isVisible('[id="accountTabButton"]');
  expect(isAccountInfoVisible).to.eql(true);
});
Then(/^I should be logged into the site/, function () {
  var isAccountInfoVisible = browser.isVisible('[id="accountTabButton"]');
  expect(isAccountInfoVisible).to.eql(true);
});
Given(/^ I go for the football competions/, function () {
  // we select the football competions and on that the premier league
  browser.waitForVisible('//ul[@id="desktop-sidebar-quick-links"]//a[@title="Football"]');
  browser.click('//ul[@id="desktop-sidebar-quick-links"]//a[@title="Football"]')
  browser.waitForVisible('//li[@id="nav-football-competitions"]//a[@title="football-competitions"]')
  browser.click('//li[@id="nav-football-competitions"]//a[@title="football-competitions"]')
  browser.waitForVisible('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]')
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
Then(/^I bet some value for the home team/, function () {
  browser.waitForVisible('//div[@id="bets-container-singles"]')
  browser.click('//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input')
  browser.setValue('//div[@class="betslip-selection__stake-container betslip-selection__stake-container--single"]/span//input','0.05')
  browser.click('//*[@id="betslip-footer-actions"]/ul/li[3]/input');
  var isBetPlaced = browser.isVisible('//div[@id="receipt-notice-box"]')
  expect(isBetPlaced).to.eql(true); 
});
  
