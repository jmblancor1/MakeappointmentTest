Feature: Create appointment

  Background:
    Given user signs in with "John Doe" and "ThisIsNotAPassword"

  Scenario Outline: Make an appointment and validations
    When user fills the "<facility>", "<comment>" and additional information
    Then user verifies creation of the appointment with the facility "<facilityName>"

    Examples:
      | facility                        | comment                                   | facilityName                  |
      | Tokyo CURA Healthcare Center    | This is in Tokyo CURA Healthcare Center.  | Tokyo CURA Healthcare Center  |
      | Hongkong CURA Healthcare Center | This in Hongkong CURA Healthcare Center.  | Hongkong CURA Healthcare Center |
      | Seoul CURA Healthcare Center    | This is in Seoul CURA Healthcare Center.  | Seoul CURA Healthcare Center  |