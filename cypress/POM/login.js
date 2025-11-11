export default class LoginPage {
  userNameLocator = "[placeholder='Username']"
  passwordLocator = "#password"
  loginButtonLocator = "#login-button"
  errorLocator='.error-button'

  loginn(username, password) {
    cy.get(this.userNameLocator).clear().type(username).should('have.value', username)
    cy.get(this.passwordLocator).clear().type(password).should('have.value', password)
    cy.get(this.loginButtonLocator).click()

  }
  loginInvalid(username,password){
    cy.get(this.userNameLocator).clear();
  if (username) {
    cy.get(this.userNameLocator).type(username).should('have.value', username);
  }

  cy.get(this.passwordLocator).clear();
  if (password) {
    cy.get(this.passwordLocator).type(password).should('have.value', password);
  }
    cy.get(this.loginButtonLocator).click()
    cy.get(this.errorLocator).should('be.visible', 'Username and password do not match any user in this service.')
  }
}
