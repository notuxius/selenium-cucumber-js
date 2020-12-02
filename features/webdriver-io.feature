@workwear
Feature: WebdriverIO redirect
  I can see redirect after click

  Scenario: See redirect
    Given I am on WebdriverIO home page
    When I click item "Get Started"
    Then I should see redirect