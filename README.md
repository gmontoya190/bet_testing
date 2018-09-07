# Automation tests for creating a bet in William Hill Site

Mobile and deskptop tests for betting in William Hill Site for a football game. Tests delveloped using cucumber and wdio.js

### Prerequisites

Make sure you have npm installed.

Install the package.json with npm install.

The steps use password and user, and value monetary to run the flows. So before to run every test set up the environment variables. You are free to set up the monetary value as you wish: 

USER_GRAND_PARADE = "User tester sent for the test"
PASSWORD_GRAND_PARADE = "Password tester sent for the test"
VALUE_BET_GRAND_PARADE = "Any value you want to bet" Example: 0.05


## Running the tests

# Mobile 
To run the mobile tests execute on the base folder :

npm run mobile
 
You have to set up the capabilities variable wdio.mobile.config.js with the description of the emulator used in this case we have:

maxInstances: 1,
browserName: 'chrome',
appiumVersion: '1.7.2',
deviceName: 'testBet',
platformVersion: '8.1.0',
platformName: 'android',

# Desktop
To run the desktop test execute on the base folder:

npm run desktop

## Report

Junit report is created in the folder junit_report.


