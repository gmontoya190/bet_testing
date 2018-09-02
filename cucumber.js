// cucumber.js

common = '--strict --require features --format pretty --tags ~@skip';

module.exports = {
  build: common + ' --format progress',
  'default': common,
  'es5': '--tags ~@es6'
};
module.exports = function() {
  this.registerHandler('BeforeFeatures', function(event, done) {
    browser.init().call(done);
  });

  this.registerHandler('AfterFeatures', function(event, done) {
    browser.end().call(done);
  });
};