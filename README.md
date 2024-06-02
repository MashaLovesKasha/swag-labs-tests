# swag-labs-tests
Tests for Swag Labs application https://www.saucedemo.com/

## Pre-requirements
You need [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to be installed to install proper version of node

## Setup
- `nvm install`
- `nvm use`
- `npm install`

## Usage
To run tests with visual debugger
- `npm run cy:open`
- choose "E2E Testing"
- choose the browser
- click "Start E2E testing"

You'll see 3 tests. You can run them one by one, test order doesn't matter. When you finish with one test - click "Specs" icon to see the list of the tests again


To run tests in the console
- `npm run cy:run`

If you want to see the report, open `cypress/reports/html/index.html` file

