import HeaderOFPage from "../POM/header"

describe('For Header Section',()=>{
    let headerr
    beforeEach(() => {
    cy.login()
    headerr = new HeaderOFPage() 
  })
  
    it('TC-HEADER-001:To verify users can view the heading',()=>{
        headerr.forTitle()
    })
    it('TC-HEADER-002: To verify user can view cart icon',()=>{
        headerr.forCartIcon()
    })
    it('TC-HEADER-003: To verify user can view menu icon and hover it', ()=>{
        headerr.forMenu()
    })
})