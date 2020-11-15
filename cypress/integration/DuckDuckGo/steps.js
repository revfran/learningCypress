import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.duckduckgo.com'
Given('I open DuckDuckGo page', () => {
  cy.visit(url)
})