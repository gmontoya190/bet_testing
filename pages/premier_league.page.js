/**
 * Module that represents the interaction with the page that lists
 * premier league game. Uses the general behaviour exposed in page.js
 */
var Page = require('./page');

var PremierLeaguePage = Object.create(Page, {
  eventsGroupSectionSelector: {
    get: function() {
      return '//div[@data-test-id="events-group"]';
    },
  },
  listGames: {
    get: function() {
      return browser.elements(
        '//div[@data-test-id="events-group"]//div[@class="sp-o-market--three-cols"]//article'
      );
    },
  },
  betsContainerSelector: {
    get: function() {
      return '//div[@id="markets-container"]';
    },
  },
  /**
   * Select the first game of the premier league
   * @param {String} Selector
   * @returns {Boolean} if game is selected
   */
  isCurrentFirstGameClicked: {
    value: function(listGames) {
      var gameClicked = false;
      if (listGames.value.length > 0) {
        listGames.value[0].click();
        gameClicked = true;
      } else {
        console.log(
          'there are no events for the english premier league at this point'
        );
      }
      return gameClicked;
    },
  },
  /**
   * Select in the given game the option home to win in 90 min.
   * @param {String} Selector
   * @returns {Boolean} if option is selected
   */
  isHomeTeamSelected: {
    value: function(gameToBet) {
      var homeTeamSelected = false;
      var betsList = gameToBet.elements(
        '//section[@class="sp-o-market__buttons"]//button'
      );
      if (betsList.value.length < 0) {
        console.log(
          'Looks like there are no local,draw and visitor bets available'
        );
      } else {
        betsList.value[0].click();
        homeTeamSelected = true;
      }
      return homeTeamSelected;
    },
  },
  /**
   * Select in the given game the option home to win in 90 min
   * for mobile version.
   * @returns {Boolean} if option is selected
   */
  IsSelectedHomeToWinMobile90Min: {
    value: function() {
      var isSelected = false;
      var betButtons = browser.elements(
        '//div[@class="btmarket__wrapper -expanded"]//div[@class="btmarket__actions"]//button'
      );
      if (betButtons.value.length > 0) {
        betButtons.value[0].touch();
        isSelected = true;
      } else {
        console.log('Looks like there are no bets available');
      }
      return isSelected;
    },
  },
});

module.exports = PremierLeaguePage;
