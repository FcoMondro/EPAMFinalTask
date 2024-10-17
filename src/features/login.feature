Feature: Login page

    Scenario: UC-1 Test Login form with empty credentials
        Given the user is on the login page
        When the user types any credentials in login fields
        And the user clears both fields
        And clicks the "Login" button
        Then "Username is required" error is displayed

    Scenario: UC-2 Test Login form with credentials by passing Username
        Given the user is on the login page
        When the user enters "someUsername" in the username field
        And clears the password field
        And clicks the "Login" button
        Then "Password is required" error is displayed

    Scenario: UC-3 Test Login form with credentials by passing Username & Password
        Given the user is on the login page
        When the user enters valid credentials "standard_user" and "secret_sauce"
        And clicks the "Login" button
        Then the dashboard title is "Swag Labs"