const expect = require('chai').expect;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var LoginPage = require('../../pages/login.page');
var FootballCompettionsPage = require('../../pages/football_competitions.page');
var PremierLeaguePage = require('../../pages/premier_league.page');
var BetPlacePage = require('../../pages/bet_place.page');


Given(/^I open up the application "([^"]*)"$/, function (url) {
 LoginPage.open(url);
 
});
When(/^I click on login button/, function () {
    LoginPage.login.click();
});
When(/^I fill user and password/, function () {
    LoginPage.username.setValue(process.env.USER_GRAND_PARADE);
    LoginPage.password.setValue(process.env.PASSWORD_GRAND_PARADE);
    LoginPage.submit.click();
   
});
Then(/^I should be logged into the site/, function () {
LoginPage.waitForElementVisible(LoginPage.depositAccount);
expect(LoginPage.account.isVisible()).to.eql(true);
});
Given(/^I go to the football competitions/, function () {
  // we select the football competions and then the premier league competition
  FootballCompettionsPage.footballSection.click();
  FootballCompettionsPage.waitForElementVisible(FootballCompettionsPage.competitionsSubSectionSelector)
  FootballCompettionsPage.competitionsSubSection.click();
  FootballCompettionsPage.clickCookiesDisclaimer();
  FootballCompettionsPage.waitForElementVisible(FootballCompettionsPage.ukCompetitionsSelector);
  FootballCompettionsPage.ukCompetitions.moveToObject();
  FootballCompettionsPage.ukCompetitions.click();
  FootballCompettionsPage.premierLeagueGames.click();
});
When(/^I select a game of english premier league and select home team to win/, function () {
  // Look for the first game on the premier and select home team to win
  // in 90 minutes option
  PremierLeaguePage.waitForElementVisible(PremierLeaguePage.eventsGroupSectionSelector);
  var listGames =PremierLeaguePage.listGames;
  expect(PremierLeaguePage.isCurrentFirstGameClicked(listGames)).to.eql(true);  
  expect(PremierLeaguePage.isHomeTeamSelected(listGames.value[0])).to.eql(true);   
});
When(/^I bet some value for the home team/, function () {
  // Place the value set up for the test in the env variable and confirm the bet.
  BetPlacePage.waitForElementVisible(BetPlacePage.betContainerSelector);
  BetPlacePage.betSlipInput.click();
  BetPlacePage.betSlipInput.setValue(process.env.VALUE_BET_GRAND_PARADE);
  BetPlacePage.placeBet.click();
  expect(BetPlacePage.noticeBoxBetPlaced.isVisible()).to.eql(true);
});
Then(/^I accept the odds and returns offered/, function () {
  BetPlacePage.openBetsContainer.click();
  BetPlacePage.notificationCashIn.click();
  BetPlacePage.waitForElementVisible(BetPlacePage.openBetsContent);
  BetPlacePage.cashInJustOpenBet();
  BetPlacePage.waitForElementVisible(BetPlacePage.cashInConfirmationContainer);
  BetPlacePage.confirmCashIn.click();
  expect(BetPlacePage.hearderBetCashIn.isVisible()).to.eql(true);  
});
