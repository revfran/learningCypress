/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I do a {string} request to fake json server for {string}', (request, endpoint) => {

    if (request == "GET") {
        cy.request("http://localhost:3000" + endpoint).as("request");
    }
})



When('I should obtain property {string} in the API response', (property) => {
    cy.get("@request").its("body").should("have.a.property", property);
})