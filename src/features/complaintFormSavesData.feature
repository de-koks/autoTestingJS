Feature: Input fields on Comlaint Form Step 1 store inputted data when a user returns to Step 1 from Step 2

    Scenario: Navigate to Complaint Form page
        Given I open "Contact Us" page
        When I close cookie banner
        When I click "Complaint" link on "Contact Us" page
        Then Current URL "is equal to" "Complaint Form" page

    Scenario: Fill in Complaint Form step 1 inputs
        When I set "<Value>" value to "<Field>" field on Complaint form Step 1
        Examples:
        | Field       | Value                  |
        | first name  | John                   |
        | last name   | Doe                    |
        | email       | example@email.com      |
        | phone       | 1234567890             |
        | address one | 4358 Quiet Valley Lane |
        | address two | 270 Hannah Street      |
        | city        | New York               |
        | zip code    | 12345                  |

    Scenario: Select country, navigate to step 2 and return to step 1
        When I select random option in "Country" dropdown on Complaint Form
        When I click "Next" button on Complaint Form
        Then Complaint Form title "is equal to" "Step 2: Detailed Information"
        When I click "Back" button on Complaint Form
