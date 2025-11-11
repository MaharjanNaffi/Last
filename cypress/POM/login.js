class forlogin{
    userName="#user-name"
    password="#password"
    login="#login-button"

    loginn(){
        cy.get(this.userName)
        cy.get(this.password)
        cy.get(this.login).click()
    }


}