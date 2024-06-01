Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]')
        .type(firstName)
    cy.get('[data-test="lastName"]')
        .type(lastName)
    cy.get('[data-test="postalCode"]')
        .type(postalCode)
})

Cypress.Commands.add('goToOverview', () => {
    cy.get('[data-test="continue"]')
        .click()
    cy.url().should('contain', '/checkout-step-two')
})

Cypress.Commands.add('finishCheckout', () => {
    cy.get('[data-test="finish"]')
        .click()
    cy.url().should('contain', '/checkout-complete.html')
})
