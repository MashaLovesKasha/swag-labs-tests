beforeEach(() => {
  cy.visit('/')
})


// Customer sorts product items
// Given standard customer is logged in
// When the customer sorts available products in product view
// Then the products are ordered according to the chosen sort method