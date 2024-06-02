/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        logIn(user: string, password: string): void
        chooseSorting(order: 'Price (low to high)' | 'Price (high to low)' | 'Name (A to Z)' | 'Name (Z to A)'): void
        checkSortingByPrice(order: 'Price (low to high)' | 'Price (high to low)'): void
        checkSortingByName(order: 'Name (A to Z)' | 'Name (Z to A)'): void
        addToCartFromInventory(name: string): void
        goToItemPage(name: string): void
        addToCartFromItemPage(): void
        goToCart(): void
        checkItemsAmount(amount: number): void
        goToCheckout(): void
        fillCheckoutForm(firstName: string, lastName: string, postalCode: string): void
        goToOverview(): void
        finishCheckout(): void
    }
}
