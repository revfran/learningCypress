/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I login to EA app page', () => {
    cy.visit("/");

    cy.login(Cypress.env("username"), Cypress.env("password"))
  })
