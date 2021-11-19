@LoginFeature
Feature: Login Feature

  Background: open the Login Page
    Given User has navigated to the login page

  @Regression @Sanity
  Scenario: Positive Login Scenario
    When User enters correct username and password
    And User clicks on the login Buton
    Then user should be navigated to the Home Page
    
@Rachit
  Scenario: Positive Login Scenario with Parameters
    When User enters correct username "abc@xyz.com" and password "Abc123"
    And User clicks on the login Buton
    Then user should be navigated to the Home Page
    
@Regression
  Scenario Outline: Positive Login Scenario with multiple User
    When User enters correct username "<Username>" and password "<Password>"
    And User clicks on the login Buton
    Then user should be navigated to the Home Page

    Examples: 
      | Username    | Password   |
      | abc@xyz.com | Abc123     |
      | prq@wq.con  | Abc1234567 |

  Scenario Outline: Negative Login Scenario with multiple User
    When User enters correct username "<Username>" and password "<Password>"
    And User clicks on the login Buton
    Then user should be getting the error message "<Error>"

    Examples: 
      | Username    | Password   | Error                                              |
      | abc@xyz.com | Abc123     | The email or password you have entered is invalid. |
      | prq@wq.com  | Abc1234567 | The email or password you have entered is invalid. |

  @DataTable   
  Scenario: Positive Login Scenario with Cucumber DataTable
    When User enters correct credentials
      | Field    | Value       |
      | UserName | abc@xyz.com |
      | Password | Abc@123     |
    And User clicks on the login Buton
    Then user should be navigated to the Home Page
