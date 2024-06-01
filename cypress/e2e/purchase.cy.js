beforeEach(() => {
  cy.visit('/')
})



// 1. Customer purchases products
// Given standard customer is logged in
// When the customer adds multiple products to the shopping cart
// And proceeds to checkout the purchase
// Then purchase is successful