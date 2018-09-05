// login.page.js
var Page = require('./page')

var FootballCompettionsPage = Object.create(Page, {
  
    /**
     * define elements
     */
    footballSection: { get: function () { return browser.element('//li[@id="nav-football"]//a[@title="Football"]'); } },
    compettionsSubSection: { get: function () { return browser.element('//li[@id="nav-football-competitions"]//a[@title="football-competitions"]'); } },
    ukCompettions:     { get: function () { return browser.element('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]'); } },
    premierLeagueGames:    { get: function () { return browser.element('//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]'); } },
    footballSectionSelector:  { get: function () { return '//li[@id="nav-football"]//a[@title="Football"]'; } },
    compettionsSubSectionSelector:  { get: function () { return '//li[@id="nav-football-competitions"]//a[@title="football-competitions"]'; } },
    ukCompettionsSelector:  { get: function () { return '//span[@class="analytics"]//a[@href="/betting/en-gb/football/competitions/region/uk"]'; } },
    carouselFootballSection: { get: function () { return browser.element('//li[@id="nav-football"]//a[@title="Football"]'); } },
    carouselFootballSectionSelector: { get: function () { return '//li[@id="nav-football"]//a[@title="Football"]'; } },
    carouselCompetiSubSection: { get: function () { return browser.element('//nav[@id="carousel"]//a[@href="/betting/en-gb/football/competitions"]'); } },
    carouselCompetiSubSectionSelec: { get: function () { return '//nav[@id="carousel"]//a[@href="/betting/en-gb/football/competitions"]'; } },
    premierLeagueGamesMobile: { get: function () { return browser.element('//div[@data-test-id="competitions-menu"]//a[@href="/betting/en-gb/football/competitions/OB_TY295/English-Premier-League/matches/OB_MGMB/Match-Betting"]'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function(url) {
        Page.open.call(this, url);
    } },
});

module.exports = FootballCompettionsPage;