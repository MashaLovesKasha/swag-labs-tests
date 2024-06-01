Cypress.Commands.add('addToCartFromItemPage', () => {
    cy.get('[data-test="add-to-cart"]')
        .click()
})
