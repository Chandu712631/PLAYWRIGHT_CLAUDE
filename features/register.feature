Feature: User registration
  As a new user
  I want to register with valid details
  So that I can access the site

  Scenario: Register a new user with random data
    Given I am on the registration page
    When I fill in valid registration details
    And I submit the registration form
    Then I should see the login page
