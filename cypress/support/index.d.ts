/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        logIn(user: string, password: string): void
        chooseSorting(order: 'Price (low to high)' | 'Price (high to low)' | 'Name (A to Z)' | 'Name (Z to A)'): void
        checkSortingByPrice(order: 'Price (low to high)' | 'Price (high to low)'): void
        checkSortingByName(order: 'Name (A to Z)' | 'Name (Z to A)'): void
    }
}