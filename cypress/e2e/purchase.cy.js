before(() => {
  cy.visit('/')
  cy.logIn(Cypress.standardUser, Cypress.password)
  cy.log('Login is successful')
  cy.url().should('contain', '/inventory.html')
})

describe('Checkout flow', () => {
  it('Customer successfully purchases products', () => {
    cy.log('Add 2 items from the inventory page to the cart')
    cy.addToCartFromInventory('Sauce Labs Fleece Jacket')
    cy.addToCartFromInventory('Test.allTheThings() T-Shirt (Red)')

    cy.log('Go to the item page and add it to the cart from the item page')
    cy.goToItemPage('Sauce Labs Backpack')
    cy.addToCartFromItemPage()

    cy.log('Go to the cart and check the amount of items')
    cy.goToCart()
    cy.checkItemsAmount(3)

    cy.log('Go to checkout, fill user info, check the amount of items')
    cy.goToCheckout()
    cy.fillCheckoutForm(Cypress.firstName, Cypress.lastName, Cypress.postalCode)
    cy.goToOverview()
    cy.checkItemsAmount(3)

    cy.log('Check important overview details')
    const checkoutDetails = ['Payment Information:', 'Shipping Information:', 'Price Total', 'Total:']
    checkoutDetails.forEach((element) => {
      cy.get('.summary_info')
          .contains(element)
          .should('be.visible')
    })

    cy.log('Finish checkout and check the success message')
    cy.finishCheckout()
    cy.contains('h2', 'Thank you for your order!')
        .next()
        .contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })
})
