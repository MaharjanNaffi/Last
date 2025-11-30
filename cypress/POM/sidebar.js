
export default class Sidebar{
    menueButtonLocator = '#react-burger-menu-btn'
    crossButtonLocator = '#react-burger-cross-btn'
    itemsLocator ='#inventory_sidebar_link'
    aboutLocator = '#about_sidebar_link'
    logoutLocator = '#logout_sidebar_link'
    resetAppLocator = '#reset_sidebar_link'



    

    clickHamburgerMenu(){
        cy.get(this.menueButtonLocator).click()
    }

   ensureSidebarOpen() {
        cy.get(this.crossButtonLocator).then(($cross) => {
            if (!$cross.is(':visible')) {
                cy.get(this.menueButtonLocator).click()
                cy.get(this.crossButtonLocator).should('be.visible')
            }
        })
    }
    assertSidebarItems(){
        this.ensureSidebarOpen()
        cy.get(this.itemsLocator).should('be.visible')
        cy.get(this.aboutLocator).should('be.visible')
        cy.get(this.logoutLocator).should('be.visible')
        cy.get(this.resetAppLocator).should('be.visible')
    }

    clickCrossButton(){
        this.ensureSidebarOpen()
        cy.get(this.crossButtonLocator).click()
    }

    clickALLItems(){
        this.ensureSidebarOpen()
        cy.get(this.itemsLocator).click()
    }

    clickAbout(){
        this.ensureSidebarOpen()
        cy.get(this.aboutLocator).click()
    }
    clickLogout(){
        this.ensureSidebarOpen()
        cy.get(this.logoutLocator).click()

    }
    clickReset(){
        this.ensureSidebarOpen()
        cy.get(this.resetAppLocator).click()
    }
}