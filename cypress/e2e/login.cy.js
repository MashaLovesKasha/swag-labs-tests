beforeEach(() => {
  cy.visit('/')
})

describe('Log in page', () => {
  it('Locked out customer fails to log in', () => {
    cy.logIn(Cypress.lockedOutUser, Cypress.password)
    // It shows us that login didn't happen
    cy.url().should('eq', Cypress.baseUrl)
    cy.get('[data-test="error"]')
        .contains('Epic sadface: Sorry, this user has been locked out.')
  })
})
