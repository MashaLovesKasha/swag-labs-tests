import './login-commands'
import './inventory-commands'
import './item-commands'
import './cart-commands'
import './checkout-commands'
import './common-commands'
import 'cypress-mochawesome-reporter/register'

// Cypress global objects
Cypress.baseUrl = Cypress.config("baseUrl")

// For login
Cypress.standardUser = 'standard_user'
Cypress.lockedOutUser = 'locked_out_user'
Cypress.password = 'secret_sauce'

// For checkout
Cypress.firstName = 'Mariia'
Cypress.lastName = 'Testonen'
Cypress.postalCode = '00250'
