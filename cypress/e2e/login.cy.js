describe('Login Test', () => {
  it('should login successfully', () => {
  cy.visit(Cypress.env('BASE_URL'))

  cy.get('#user-name').type(Cypress.env('USERNAME'))
  cy.get('#password').type(Cypress.env('PASSWORD'))

  cy.get('#login-button').click() // Click the login button
  })
})
