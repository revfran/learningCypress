/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given('I visit EA app page', () => {
    cy.visit("/");
})

When('I login to EA app page with {string} and {string}', (username, password) => {
    cy.login(username, password)
})

When('I login to EA app page with following credentials', (datatable) => {

    // Parse first row of data
    let data = datatable.rawTable
        .slice(1)
        .map(
            (row) => {
                cy.log("Row data: ",row);
                return {
                    username: row[0],
                    password: row[1]
                }
            }
        );

    cy.log(data[0]);

    cy.login(data[0].username, data[0].password)
})


