/// <reference types="cypress" />

describe("Testing of EA app", () => {
    it("Login application", () => {

        cy.visit("/");

        cy.login(Cypress.env("username"), Cypress.env("password"))
    })
})
