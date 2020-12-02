module.exports = function () {
  this.Given(/^I am on WebdriverIO home page$/, function () {
    // load google
    return helpers.loadPage(page.webdriverIo.url);
  });

  this.Then(/^I click item "([^"]*)"$/, function (item) {
    // click an item in the search results via the google page object
    return page.webdriverIo.clickItem(item);
  });

  this.Then(/^I should see redirect$/, function () {
    return page.webdriverIo.urlsNotMatch(page.webdriverIo.url);
  });
};
