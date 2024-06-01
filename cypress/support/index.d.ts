/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        logIn(user: string, password: string): void
    }
}