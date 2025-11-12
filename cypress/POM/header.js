export default class HeaderOFPage {
  titleLocator = '.app_logo';
  cartIconLocator = '.shopping_cart_link';
  menuLocator = '#react-burger-menu-btn';

  forTitle() {
    cy.get(this.titleLocator)
      .should('be.visible')
      .and('contain.text', 'Swag Labs')
  }

  forCartIcon() {
    cy.get(this.cartIconLocator).should('be.visible').trigger('mouseover')
  }

  forMenu() {
    cy.get(this.menuLocator).should('be.visible').trigger('mouseover')
  }
}
