module.exports = {
  url: "https://webdriver.io/",

  elements: {
    buttonItem: ".button[href='/docs/gettingstarted.html']",
  },

  clickItem: function (containingText) {
    return helpers.clickHiddenElement(
      page.webdriverIo.elements.buttonItem,
      containingText
    );
  },

  titleContains: function (expectedTitle) {
    return driver.getTitle().then(function (pageTitle) {
      expect(pageTitle).to.contain(expectedTitle);
    });
  },

  urlsNotMatch: function (prevUrl) {
    return driver.getCurrentUrl().then(function (currentUrl) {
      expect(currentUrl).to.not.equal(prevUrl);
    });
  },
};
