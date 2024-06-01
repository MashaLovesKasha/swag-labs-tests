Cypress.Commands.add('logIn', (user, password) => {
    cy.get('[id="user-name"]')
        .type(user)
    cy.get('[id="password"]')
        .type(password)
    cy.get('[id="login-button"]')
        .click()
    cy.wait(200)
})
