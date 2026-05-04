Feature: Example domain page

  Scenario: Verify example domain title and heading
    Given I open the example page
    Then I should see the page title "Example Domain"
    And I should see the heading "Example Domain"
