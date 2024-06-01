import './login-commands'
import './inventory-commands'
import './cart-commands'
import './checkout-commands'

// Cypress global objects
Cypress.baseUrl = Cypress.config("baseUrl")
// For login
Cypress.standardUser = 'standard_user'
Cypress.lockedOutUser = 'locked_out_user'
Cypress.password = 'secret_sauce'