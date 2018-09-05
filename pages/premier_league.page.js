// login.page.js
var Page = require('./page')

var PremierLeaguePage = Object.create(Page, {
  
    /**
     * define elements
     */
    eventsGroupSectionSelector: { get: function () { return '//div[@data-test-id="events-group"]' } },
    listGames: { get: function () { return browser.elements('//div[@data-test-id="events-group"]//div[@class="sp-o-market--three-cols"]//article'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function(url) {
        Page.open.call(this, url);
    } },
    isCurrentFirstGameClicked: { value: function(listGames) {
        var gameClicked = false;
        if (listGames.value.length >0) 
        {
            listGames.value[0].click();
            gameClicked = true
        }
        else {
            console.log("there are no events for the english premier league at this point")
        }
        return gameClicked;
    } },

    isHomeTeamSelected: { value: function(gameToBet) {
        var homeTeamSelected = false;
        var betsList = gameToBet.elements('//section[@class="sp-o-market__buttons"]//button')
        if(betsList.value.length < 0)
        {
          console.log("Looks like there are no local,draw and visitor bets available")
        } else {
         betsList.value[0].click();
         homeTeamSelected = true;
        }
        return homeTeamSelected;
    } },
});

module.exports = PremierLeaguePage;