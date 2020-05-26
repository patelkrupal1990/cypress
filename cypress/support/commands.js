// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// example of commands
Cypress.Commands.add("login", (email, password) => { 
  cy.get('#Email')
    .clear()
    .type(email).should('have.value',email)
  cy.get('#Password')
    .clear()
    .type(password).should('have.value',password)
  cy.get('#RememberMe').not('[disabled]')
    .check().should('be.visible')
    .uncheck().should('be.visible')
  cy.get('.login-button').should('be.visible')
    .click()
})