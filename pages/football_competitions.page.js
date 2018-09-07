var Page = require('./page');
/**
 * Module that represents the iteraction with football competitions
 * available in the portal,for mobile and desktop configuration. Uses
 * the general behaviour exposed in page.js
 */
var FootballCompetitionsPage = Object.create(Page, {
  footballSection: {
    get: function() {
      return browser.element('//li[@id="nav-football"]//a[@title="Football"]');
    },
  },
  competitionsSubSection: {
    get: function() {
      return browser.element(
        '//li[@id="nav-football-competitions"]//a[@title="football-competitions"]'
      );
    },
  },
  ukCompetitions: {
    get: function() {
      return browser.element(
        '//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]'
      );
    },
  },
  premierLeagueGames: {
    get: function() {
      return browser.element(
        '//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]'
      );
    },
  },
  footballSectionSelector: {
    get: function() {
      return '//li[@id="nav-football"]//a[@title="Football"]';
    },
  },
  competitionsSubSectionSelector: {
    get: function() {
      return '//li[@id="nav-football-competitions"]//a[@title="football-competitions"]';
    },
  },
  ukCompetitionsSelector: {
    get: function() {
      return '//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]';
    },
  },

  carouselFootballSection: {
    get: function() {
      return browser.element(
        '//div[@class="order-elements__carousel"]//a[@href="/betting/en-gb/football"]'
      );
    },
  },
  carouselFootballSectionSelector: {
    get: function() {
      return '//div[@class="order-elements__carousel"]//a[@href="/betting/en-gb/football"]';
    },
  },
  carouselCompetiSubSection: {
    get: function() {
      return browser.element(
        '//nav[@id="carousel"]//a[@href="/betting/en-gb/football/competitions"]'
      );
    },
  },
  carouselCompetiSubSectionSelec: {
    get: function() {
      return '//nav[@id="carousel"]//a[@href="/betting/en-gb/football/competitions"]';
    },
  },
  premierLeagueGamesMobile: {
    get: function() {
      return browser.element(
        '//div[@data-test-id="competitions-menu"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]'
      );
    },
  },
});

module.exports = FootballCompetitionsPage;
