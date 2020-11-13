/// <reference types="cypress" />

describe("Testing of EA app", () => {
    it("Login application", () => {

        cy.visit("http://eaapp.somee.com");

       cy.login('admin','password')
    })
})