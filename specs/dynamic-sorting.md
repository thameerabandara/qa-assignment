# Dynamic Product Sorting Automation Plan

- Target Application: https://www.saucedemo.com
- Page Objects: [pages/LoginPage.ts](../pages/LoginPage.ts), [pages/InventoryPage.ts](../pages/InventoryPage.ts)
- Spec File: [specs/dynamic-sorting.spec.ts](dynamic-sorting.spec.ts)
- Screenshot Folder: [screenshots/dynamic-sorting](../screenshots/dynamic-sorting)

## Scenario: Dynamic Product Sorting - Price Low to High

- Scenario Number: 1
- Priority: High
- Severity: High
- Module: Inventory
- Feature: Product Sorting and Price Validation
- Objective: Verify that products can be sorted from low to high price and that the displayed prices are correctly ordered.
- Preconditions:
  - The SauceDemo application is reachable.
  - The user can successfully log in with valid credentials.
- Test Data:
  - Username: standard_user
  - Password: secret_sauce
- Steps:
  1. Navigate to the SauceDemo login page.
  2. Log in with the standard user credentials.
  3. Verify the inventory page is displayed by checking the URL contains /inventory.
  4. Verify the inventory page title reads Products.
  5. Sort products by Price (Low to High).
  6. Retrieve the displayed product prices from the DOM.
  7. Validate that the retrieved prices are in ascending order.
  8. Compare the DOM prices to the expected sorted price order.
  9. Capture a screenshot after validation.
- Expected Result:
  - The user reaches the inventory page.
  - The inventory page title is Products.
  - The product prices are sorted in ascending order.
  - The screenshot is saved to [screenshots/dynamic-sorting/dynamic-sorting-validation.png](../screenshots/dynamic-sorting/dynamic-sorting-validation.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Smoke
- Page Objects Required:
  - LoginPage
  - InventoryPage
- Methods Required:
  - navigate()
  - login(username, password)
  - sortProducts(option)
  - getProductPrices()
- Assertions Required:
  - Verify the URL contains /inventory.
  - Verify the page title is Products.
  - Verify the prices are sorted in ascending order.
  - Verify the DOM prices match the expected sorted order.
- Screenshot Required: Yes
- Risk: Medium
- Dependencies: None
- Notes:
  - Reuse the existing inventory page object and avoid duplication.