const searchHelpers = require('../support/helpers/searchHelper')

module.exports = function () {

  this.When(/^I search for restaurants$/, searchHelpers.fillInAreaCode);

  this.Given(/^I want food in "([^"]*)"$/, searchHelpers.selectFirstSuggestedOption);
  

  this.Then(/^I should see some restaurants in "([^"]*)"$/, searchHelpers.menuResultsVisible);
};
