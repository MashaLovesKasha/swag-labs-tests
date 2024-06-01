Cypress.Commands.add('goToCart', () => {
    cy.get('[data-test="shopping-cart-link"]')
        .click()
    cy.url().should('contain', '/cart.html')
})

Cypress.Commands.add('goToCheckout', () => {
    cy.get('[data-test="checkout"]')
        .click()
    cy.url().should('contain', '/checkout-step-one')
})
