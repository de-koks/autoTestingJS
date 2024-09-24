Feature: Input fields on Comlaint Form Step 1 store inputted data when a user returns to Step 1 from Step 2

    Scenario: Navigate to Complaint Form page

        Given I open "Contact Us" page
        When I close cookie banner
        When I click "Complaint" link on "Contact Us" page
