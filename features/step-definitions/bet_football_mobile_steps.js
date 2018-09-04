const expect = require('chai').expect;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
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
    browser.waitForVisible('//div[@class="order-elements__carousel"]//a[@href="/betting/en-gb/football"]')
    browser.click('//div[@class="order-elements__carousel"]//a[@href="/betting/en-gb/football"]')
    browser.waitForVisible('//nav[@id="carousel"]');
    browser.click('//*[@id="carousel"]/div/ul/li[5]/a');
    browser.waitForVisible('//div[@id="football"]')
    browser.click('.cookie-disclaimer__button')
    browser.click('//div[@id="football"]//div[@data-test-id="competitions-menu"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]')
});
When(/^I select a game of english premier league and select home team to win/, function () {
    // Look for the first game on the premier and list the options to bet
  var betHomeTeamSelected = false;
  browser.waitForVisible('//div[@data-test-id="events-group"]')

  var listGames = browser.elements('//div[@data-test-id="events-group"]//div[@class="sp-o-market--three-cols"]//article')
  if (listGames.value.length >0) {
      listGames.value[0].click();
  }
  else {
      console.log("there are no events for the english premier league at this point")
  }
  browser.waitForVisible('//div[@id="markets-container"]')
  var betsList = browser.elements('//div[@id="markets-container"]//div[@class="btmarket__selection"]')
  if(betsList.value.length < 0){
      console.log("Looks like there are no local,draw and visitor bets available")
    } else {
    browser.click('/html/body/div[10]/div/button');
    browser.waitForVisible('//div[@id="markets-container"]')
    var addButtons = browser.elements('//div[@class="btmarket__wrapper -expanded"]//div[@class="btmarket__actions"]//button')
    addButtons.value[0].hold();
    betHomeTeamSelected = true;
      
  }
  expect(betHomeTeamSelected).to.eql(true);   
});
  Then(/^I bet some value for the home team/, function () {
});