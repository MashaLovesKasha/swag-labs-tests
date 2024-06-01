Cypress.Commands.add('chooseSorting', (order) => {
    cy.get('[data-test="product-sort-container"]')
        .select(order)
})

Cypress.Commands.add('checkSortingByPrice', (order) => {
    cy.chooseSorting(order)
    cy.get('[data-test="inventory-item-price"]').then(($prices) => {
        // Get the prices from the items and convert them to numbers
        const prices = $prices.map((index, priceElement) => {
            const priceText = priceElement.innerText
            // Removes non-numeric characters
            return parseFloat(priceText.replace(/[^0-9.]+/g,""))
        }).get()
        const sortedPrices = [...prices]

        // Sort the prices based on the selected order
        if (order === 'Price (low to high)') {
            sortedPrices.sort((a, b) => a - b)
        } else if (order === 'Price (high to low)') {
            sortedPrices.sort((a, b) => b - a)
        }

        // Check that the original prices array matches the sorted prices array
        expect(prices).to.deep.equal(sortedPrices)
    })
})

Cypress.Commands.add('checkSortingByName', (order) => {
    cy.chooseSorting(order)
    cy.get('[data-test="inventory-item-name"]').then(($names) => {
        // Get the names from the items
        const names = $names.map((index, nameElement) => nameElement.innerText).get()
        const sortedNames = [...names]

        // Sort the names based on the selected order
        if (order === 'Name (A to Z)') {
            sortedNames.sort((a, b) => a.localeCompare(b))
        } else if (order === 'Name (Z to A)') {
            sortedNames.sort((a, b) => b.localeCompare(a))
        }

        // Check that the original names array matches the sorted names array
        expect(names).to.deep.equal(sortedNames)
    })
})

Cypress.Commands.add('addToCartFromInventory', (name) => {
    cy.contains(name)
        .parents('[data-test="inventory-item"]')
        .find('.btn_inventory')
        .click()
})

Cypress.Commands.add('goToItemPage', (name) => {
    cy.contains(name)
        .click()
    cy.url().should('contain', '/inventory-item.html')
})
