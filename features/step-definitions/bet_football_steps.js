const expect = require('chai').expect;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {And} = require('cucumber');
var LoginPage = require('../../pages/login.page');
var FootballCompettionsPage = require('../../pages/football_compettions.page');
var PremierLeaguePage = require('../../pages/premier_league.page');
var BetPlacePage = require('../../pages/bet_place.page');


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
LoginPage.waitForElementVisible(LoginPage.depositAccount);
expect(LoginPage.account.isVisible()).to.eql(true);
});
Given(/^I go for the football competions/, function () {
  // we select the football competions and on that the premier league
  FootballCompettionsPage.footballSection.click();
  FootballCompettionsPage.waitForElementVisible(FootballCompettionsPage.compettionsSubSectionSelector)
  FootballCompettionsPage.compettionsSubSection.click();
  FootballCompettionsPage.clickCookiesDisclaimer();
  FootballCompettionsPage.waitForElementVisible(FootballCompettionsPage.ukCompettionsSelector);
  FootballCompettionsPage.ukCompettions.moveToObject();
  FootballCompettionsPage.ukCompettions.click();
  FootballCompettionsPage.premierLeagueGames.click();
});
When(/^I select a game of english premier league and select home team to win/, function () {
  // Look for the first game on the premier and list the options to bet
  PremierLeaguePage.waitForElementVisible(PremierLeaguePage.eventsGroupSectionSelector);
  var listGames =PremierLeaguePage.listGames;
  expect(PremierLeaguePage.isCurrentFirstGameClicked(listGames)).to.eql(true);  
  expect(PremierLeaguePage.isHomeTeamSelected(listGames.value[0])).to.eql(true);   
});
When(/^I bet some value for the home team/, function () {
  BetPlacePage.waitForElementVisible(BetPlacePage.betContainerSelector);
  BetPlacePage.betSlipInput.click();
  BetPlacePage.betSlipInput.setValue('0.05');
  BetPlacePage.placeBet.click();
  expect(BetPlacePage.noticeBoxBetPlaced.isVisible()).to.eql(true);
});
When(/^I accept the odds and returns offered/, function () {
  BetPlacePage.openBetsContainer.click();
  BetPlacePage.notificationCashIn.click();
  BetPlacePage.waitForElementVisible(BetPlacePage.openBetsContent);
  BetPlacePage.cashInJustOpenBet();
  BetPlacePage.waitForElementVisible(BetPlacePage.cashInConfirmationContainer);
  BetPlacePage.confirmCashIn.click();
  expect(BetPlacePage.hearderBetCashIn.isVisible()).to.eql(true);  
});
