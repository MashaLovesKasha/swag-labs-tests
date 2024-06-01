beforeEach(() => {
  cy.visit('/')
  cy.logIn(Cypress.standardUser, Cypress.password)
  cy.log('Login is successful')
  cy.url().should('contain', '/inventory.html')
})

describe('Inventory page', () => {
  it('Customer sorts product items by price (low to high)', () => {
    cy.checkSortingByPrice('Price (low to high)')
  })
  it('Customer sorts product items by price (high to low)', () => {
    cy.checkSortingByPrice('Price (high to low)')
  })
  it('Customer sorts product items by name (A to Z)', () => {
    cy.checkSortingByName('Name (A to Z)')
  })
  it('Customer sorts product items by name (Z to A)', () => {
    cy.checkSortingByName('Name (Z to A)')
  })
})
