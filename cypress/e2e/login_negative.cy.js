import LoginPage from "../POM/login"
describe('Negative Login Test',()=>{
    const login = new LoginPage();

    it('TC-LOGIN-002:Valid username and invalid password',()=>{
        cy.visit('/')
        login.loginInvalid( Cypress.env('USERNAME'),'wrong password');

    })
    it('TC-LOGIN-003:Invalid username and valid password ',()=>{
        cy.visit('/')
        login.loginInvalid('blue_flower',Cypress.env('PASSWORD'))

    })
    it('TC-LOGIN-004:Empty uername and valid Password',()=>{
        cy.visit('/')
        login.loginInvalid('null',Cypress.env('PASSWORD'))
    })
})