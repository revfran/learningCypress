Feature: DuckDuckgo

    @focus
    Scenario: Opening a search page
        Given I open DuckDuckGo page
        Then I see "DuckDuckGo" in the title

    @focus
    Scenario: Opening a search page - accesibility
        Given I open DuckDuckGo page
        Then I check accesibility