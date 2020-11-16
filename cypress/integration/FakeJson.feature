Feature: Test an API

    @ignore
    Scenario: GET request to local fake json server
        When I do a "GET" request to fake json server for "/posts/1"
        Then I should obtain property "id" in the API response