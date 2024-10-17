Feature: Login page

    Scenario: UC-1 Test Login form with empty credentials
        Given the user is on the login page
        When the user types any credentials in login fields
        And the user clears both fields
        And clicks the "Login" button
        Then "Username is required" error is displayed

