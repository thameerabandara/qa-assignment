# GitHub Copilot Instructions

You are working in a Playwright TypeScript automation framework for the SauceDemo application.

Always understand the existing framework before generating code.

This project follows a Planner → Generator → Healer workflow.

---

# Tech Stack

- Playwright 1.56+
- TypeScript
- Node.js 20+
- @playwright/test
- GitHub Copilot Agent Mode
- VS Code MCP

---

# Project Structure

```
pages/
│
├── LoginPage.ts
├── InventoryPage.ts
└── CheckoutPage.ts

specs/
│
├── login.spec.ts
├── dynamic-sorting.spec.ts
├── checkout-e2e.spec.ts
└── checkout-negative.spec.ts

screenshots/
│
├── login/
├── dynamic-sorting/
└── checkout/

.github/
│
└── copilot-instructions.md
```

Never change the project structure unless explicitly requested.

---

# Existing Page Objects

## LoginPage

Responsible for

- Navigate
- Login
- Read Login Error

Available methods

- navigate()
- login(username,password)
- getErrorMessage()

---

## InventoryPage

Responsible for

- Inventory Validation
- Product Sorting
- Product Price Validation

Available methods

- sortProducts(option)
- getProductPrices()

---

## CheckoutPage

Responsible for

- Add Product
- Open Cart
- Checkout
- Fill Customer Information
- Continue Checkout
- Finish Order
- Read Checkout Summary
- Read Validation Errors

Available methods

- addProductToCart()
- openCart()
- clickCheckout()
- fillCheckoutInformation()
- clickContinue()
- finishOrder()
- getSubtotal()
- getTax()
- getTotal()
- getCheckoutError()

---

# Existing Test Coverage

Already implemented

## Login

- Successful Login
- Locked User Login

## Inventory

- Dynamic Product Sorting
- Price Validation

## Checkout

- Complete Checkout Flow
- Order Completion
- Mandatory Field Validation

Before generating new tests always search existing specs.

Avoid duplicate automation.

---

# Coding Standards

Always use

- async/await
- TypeScript
- Playwright Test Runner

Organize tests using

```ts
test.describe()
```

Use meaningful test names

Example

```
SMOKE @smoke - Successful Login

REGRESSION @regression - Failed Login
```

Keep tests readable.

Use Arrange

Act

Assert

sections whenever practical.

---

# Page Object Rules

Always reuse existing Page Objects.

Never duplicate

- locators
- methods
- page classes

If a required method already exists

reuse it.

If one method is missing

append only that method.

Never rewrite an existing Page Object.

Never place reusable locators inside spec files.

---

# Locator Strategy

Preferred order

1. Existing locator already inside Page Object
2. data-test attributes
3. Playwright locators
4. Stable CSS selectors

Avoid XPath unless there is no alternative.

Never duplicate an existing locator.

---

# Assertions

Prefer

```ts
await expect(locator).toHaveText()

await expect(locator).toBeVisible()

await expect(page).toHaveURL()

expect(value).toEqual()

expect(value).toContain()

expect(value).toBe()
```

Never weaken assertions.

Never remove assertions to make tests pass.

---

# Synchronization

Use Playwright auto waiting.

Allowed

```ts
expect(locator).toBeVisible()

expect(page).toHaveURL()

locator.waitFor()
```

Forbidden

```ts
page.waitForTimeout()

sleep()

hard waits
```

---

# Screenshots

Store screenshots inside

```
screenshots/login/

screenshots/dynamic-sorting/

screenshots/checkout/
```

Use

```ts
await page.screenshot({
    path: "...",
    fullPage: true
});
```

Capture screenshots

- After successful execution
- Before important validation failures when evidence is required

---

# Logging

For every validation log

```
Expected:

Actual:
```

using

```ts
console.log()
```

---

# Smoke & Regression

Critical happy paths

```
@smoke
```

Other scenarios

```
@regression
```

Follow existing naming convention.

---

# Generator Rules

When generating tests

- Search for an existing spec first.
- Reuse existing Page Objects.
- Reuse existing methods.
- Add only missing methods.
- Do not duplicate code.
- Do not generate placeholder code.
- Generate executable Playwright TypeScript only.

---

# Healer Rules

When fixing failures

First determine whether the issue is

- Automation
- Application
- Environment
- Test Data

Fix only automation issues.

Never weaken assertions.

Never hide failures.

Never skip tests.

If the application is defective

document it instead of changing the test.

update the defect report in reports/defects.xlsx.

---

# Forbidden

Never

- Duplicate Page Objects
- Duplicate locators
- Duplicate methods
- Use waitForTimeout()
- Use sleep()
- Skip tests
- Use test.fixme()
- Comment out assertions
- Remove assertions
- Hardcode dynamic values
- Modify playwright.config.ts without approval
- Add unnecessary dependencies
- Use page.pause() in committed code

---

# Before Generating Code

Always

- Search the repository.
- Reuse existing framework.
- Check whether a similar test already exists.
- Preserve current project structure.
- Follow existing naming conventions.

Prefer extending the framework over recreating it.

---

# Planner → Generator → Healer Workflow

Planner

- Explore application
- Discover scenarios
- Identify missing coverage
- Produce Markdown plan

Generator

- Convert planner scenario into Playwright TypeScript
- Reuse Page Objects
- Update existing spec when appropriate

Healer

- Diagnose failures
- Repair automation only
- Preserve assertions
- Document real application defects

---

# Success Criteria

Every generated solution must

✓ Compile successfully

✓ Follow Playwright best practices

✓ Reuse existing Page Objects

✓ Reuse existing methods

✓ Keep tests readable

✓ Avoid duplicated code

✓ Preserve assertions

✓ Use existing screenshot structure

✓ Match current project architecture

✓ Be production ready