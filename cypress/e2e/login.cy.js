beforeEach(() => {
  cy.visit('/')
})

describe('Login page', () => {
  it('User is locked out from the platform', () => {
    cy.logIn(Cypress.lockedOutUser, Cypress.password)

    cy.log('Login failed')
    cy.url().should('eq', Cypress.baseUrl)
    cy.get('[data-test="error"]')
        .contains('Epic sadface: Sorry, this user has been locked out.')
  })
})
