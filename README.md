# Playwright Automation Framework - QA Assignment

## Project Overview

This repository contains an end-to-end automation framework developed using **Playwright with TypeScript**.

The project automates key business workflows of the application under test, validates UI behavior, captures execution evidence, generates Playwright reports, and demonstrates automation improvements using **Playwright MCP (Model Context Protocol)**.

Application Under Test:

https://www.saucedemo.com

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| Playwright | End-to-End UI Automation |
| TypeScript | Automation Programming Language |
| Node.js | Runtime Environment |
| Playwright MCP | AI-assisted automation improvement |
| ExcelJS | Defect Report Generation |
| Git/GitHub | Version Control |
| GitHub Actions | CI/CD Automation |

---

# Repository Structure

qa-assignment/
│
├── .github/
│ └── workflows/
│ └── playwright.yml
│
├── allure-results/
│ └── (Generated Allure test execution results)
│
├── node_modules/
│ └── (Installed npm dependencies)
│
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ └── CheckoutPage.ts
│
├── reports/
│ ├── playwright-report/
│ └── defects.xlsx
│
├── screenshots/
│ ├── login/
│ ├── checkout/
│ └── dynamic-sorting/
│
├── specs/
│ ├── login.spec.ts
│ ├── checkout-e2e.spec.ts
│ ├── checkout-negative.spec.ts
│ └── dynamic-sorting.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md





## Folder Description

| Folder/File | Description |
|-------------|-------------|
| `.github/workflows/` | Contains GitHub Actions CI/CD workflow configuration |
| `allure-results/` | Stores generated Allure test execution data |
| `node_modules/` | Contains installed project dependencies |
| `pages/` | Page Object Model classes containing reusable page actions |
| `reports/playwright-report/` | HTML Playwright execution reports |
| `reports/defects.xlsx` | Automated Excel defect tracking report |
| `screenshots/` | Test execution screenshots grouped by test scenario |
| `specs/` | Playwright test specification files |
| `playwright.config.ts` | Playwright framework configuration |
| `package.json` | Project dependencies and npm scripts |
| `README.md` | Project documentation |




---

# Prerequisites Setup

Install the following:

## Required Software

- Node.js (v18 or above)
- npm
- Git
- VS Code

Verify installation:

node -v

npm -v

git --version

---

# Installation

Clone the repository:



git clone <repository-url>


Navigate to project:

cd qa-assignment


Install dependencies:


npm install


Install Playwright browsers:


npx playwright install


---

# Running Tests

## Execute all tests


npx playwright test


---

## Run tests in headed browser mode


npx playwright test --headed


---

## Run specific test

Example:


npx playwright test tests/checkout-e2e.spec.ts


---

## Debug mode


npx playwright test --debug




---

# View Playwright Report

After execution:


npx playwright show-report


Report location:


reports/playwright-report


---

# Automated Test Coverage




## 1. Login Validation

Covered scenarios:

- Valid user login
- Invalid username validation
- Invalid password validation
- Error message verification


## 2. Dynamic Product Sorting

Covered scenarios:

- Sort products by price low to high
- Validate displayed prices
- Verify DOM price values are sorted ascending


## 3. Checkout Workflow

Covered scenarios:

- Add product to cart
- Navigate to checkout
- Enter customer details
- Complete purchase
- Validate order confirmation





## 4. Negative Checkout Scenarios

Covered scenarios:

- Empty checkout fields
- Missing required information
- Validation message verification

---

# Test Cases

Manual test cases are maintained covering:

| Test ID | Scenario | Status |
|---------|----------|--------|
| TC001 | Valid Login | Automated |
| TC002 | Invalid Login | Automated |
| TC003 | Product Sorting Validation | Automated |
| TC004 | Add Product To Cart | Automated |
| TC005 | Checkout Completion | Automated |
| TC006 | Checkout Validation | Automated |





---

# MCP Integration Summary

## MCP Usage

Playwright MCP was integrated to support AI-assisted automation improvement.

MCP command:


npx @playwright/mcp


---

## MCP Prompts Used

Examples:

### Prompt 1


Analyze this Playwright project structure and suggest improvements following automation best practices.


Result:

- Improved page object structure
- Suggested reusable components
- Improved test organization


---

### Prompt 2


Review Playwright tests and identify missing validations and possible improvements.


Result:

- Added additional assertions
- Improved error handling
- Added screenshot capture


---

### Prompt 3

Analyze failed Playwright tests and suggest possible locator improvements.


Result:

- Updated unstable locators
- Improved test reliability


---

# Self-Healing Results After MCP

Before MCP improvements:

- Duplicate locators
- Hardcoded waits
- Limited assertions
- Less reusable code


After MCP improvements:



✓ Page Object Model implemented

✓ Reusable test hooks added

✓ Improved locator strategy

✓ Better error handling

✓ Automatic screenshots on failures

✓ Improved test readability

---

# Defect Report

Defect details are maintained in:



reports/defects.xlsx


The report contains:

- Defect ID
- Test Scenario
- Description
- Severity
- Priority
- Expected Result
- Actual Result
- Status


Example defects identified:

| Defect ID | Description | Severity |
|-----------|-------------|----------|
| BUG001 | Checkout validation message inconsistency | Medium |
| BUG002 | Sorting validation issue | Medium |
| BUG003 | UI element stability issue | Low |


---


# Screenshots

Screenshots are automatically captured for failed tests.

Location:


screenshots/


---

# CI/CD Integration

The framework can be integrated with:

- GitHub Actions
- Jenkins
- GitLab CI


Recommended execution command:
npx playwright test


---

# Author

QA Automation Engineer

Technology:
Playwright | TypeScript  | MCP | Defect traker|allure report


----------------------------------------------------------------------------------------------------------