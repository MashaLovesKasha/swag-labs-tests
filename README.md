# swag-labs-tests
Tests for Swag Labs application https://www.saucedemo.com/

## Pre-requirements
You need [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to be installed to install proper version of node

## Setup
- `nvm install`
- `nvm use`
- `npm install`

## Usage
### To run tests with visual debugger
- `npm run cy:open`
- choose "E2E Testing"
- choose the browser
- click "Start E2E testing"

There are 3 tests (one test for each test scenario from the test assignment):
- `login.cy.js`
- `purchase.cy.js`
- `sorting.cy.js`

You can run them one by one, test order doesn't matter. When you finish with one test - click "Specs" icon to see the list of the tests again

### To run tests in the console
- `npm run cy:run`

If you want to see the report, open `cypress/reports/html/index.html` file

<br/>
❗️ I added one failing test in the `login.cy.js` file on purpose, just to show you how the failed test would look in the visual debugger and in the report

