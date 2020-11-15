Feature: EA app

    @focus
    Scenario: Log in to EA app
        Given I visit EA app page
        When I login to EA app page with "admin" and "password"
        Then I see "Home - Execute Automation Employee App" in the title

    @focus @datatable_sample
    Scenario: Log in to EA app (datatable example)
        Given I visit EA app page
        When I login to EA app page with following credentials
            | username | password |
            | admin    | password |
        Then I see "Home - Execute Automation Employee App" in the title

    @focus
    Scenario: Failed log in to EA app
        Given I visit EA app page
        When I login to EA app page with following credentials
            | username | password |
            | admin    | 1234     |
        Then I see "Login" in the title