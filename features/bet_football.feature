Feature: Make a bet in premier league game
	Scenario: Login into web site
  		Given I open up the application "http://sports.williamhill.com/betting/en-gb"
		When I click on login button
		When I fill user and password
		Then I should be logged into the site

	Scenario: Making a bet home team to win
		Given I go for the football competions
		When I select a game of english premier league and select home team to win
		When I bet some value for the home team
		When I accept the odds and returns offered