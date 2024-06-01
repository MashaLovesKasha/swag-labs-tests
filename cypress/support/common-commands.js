Cypress.Commands.add('checkItemsAmount', (amount) => {
    cy.get('[data-test="inventory-item"]')
        .should('have.length', amount)
})
