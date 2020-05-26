import LoginPage from '../pageObjectModel/login_page'

describe('this is my first test', () => {

beforeEach(function(){
  cy.log('this is before each function')
  cy.fixture('temp_mail').as('temp_mail')
  // cy.visit(Cypress.config().baseUrl)
})

afterEach(function() {
  cy.wait(2000)
  cy.log('this is after each function')
})

it('User should login with correct email and invalid password' ,  function() {
  cy.visit('/')
  cy.get('.session-authentication').within(() => {
    cy.contains('Sign in to GitHub').should('be.visible')
  })
  cy.get('.btn').click()
  cy.get('#login').within(() => {
    cy.get('#login_field')
      .focus()
      .type('abc@gmail.com', { delay: 10 }).should('have.value','abc@gmail.com')
    cy.get('#password')
      .type('abcd')
      .clear()
      .should('have.value','')
      .type('abcd')
      .should('have.value','abcd')
  cy.get('.flash')
    .should('have','Incorrect username or password.')
  })
})


it('User should login with correct email and invalid password with POM' ,  function() {
  cy.visit('/')
  cy.get('.session-authentication').within(() => {
    cy.contains('Sign in to GitHub').should('be.visible')
  })
  const LP = new LoginPage()
  LP.fillUsername('abc@gmail.com')
  LP.fillPassword('abcdefg')
  LP.loginButton()
  cy.get('.flash')
    .should('have','Incorrect username or password.')
})

it('User should login with correct email and invalid password with using commands' ,  function() {
  cy.visit('https://admin-demo.nopcommerce.com/login')
  cy.login('admin@yourstore.com','admin')
  cy.title().should('be.equal','Dashboard / nopCommerce administration')
})

})