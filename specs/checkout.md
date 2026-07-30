# Checkout Automation Plan

- Target Application: https://www.saucedemo.com
- Page Objects: [pages/LoginPage.ts](../pages/LoginPage.ts), [pages/InventoryPage.ts](../pages/InventoryPage.ts), [pages/CheckoutPage.ts](../pages/CheckoutPage.ts)
- Spec File: [specs/checkout.spec.ts](checkout.spec.ts)
- Screenshot Folder: [screenshots/checkout](../screenshots/checkout)

## Scenario 1: Negative Checkout - Missing Mandatory Information

- Scenario Number: 1
- Priority: High
- Severity: High
- Module: Checkout
- Feature: Checkout Validation
- Objective: Verify that the checkout form blocks submission when mandatory customer information is missing and shows the expected validation message.
- Preconditions:
  - The SauceDemo application is reachable.
  - The user can successfully log in with valid credentials.
  - The inventory page is available.
- Test Data:
  - Username: standard_user
  - Password: secret_sauce
- Steps:
  1. Open the SauceDemo login page.
  2. Log in with the standard user credentials.
  3. Verify the inventory page is displayed and the title reads Products.
  4. Add a product to the cart.
  5. Open the shopping cart.
  6. Click Checkout.
  7. Leave the checkout information fields empty.
  8. Click Continue.
  9. Capture a screenshot after the validation error is displayed.
- Expected Result:
  - The checkout validation error message is displayed.
  - The error message contains: Error: First Name is required
  - The screenshot is saved to [screenshots/checkout/missing-checkout-information.png](../screenshots/checkout/missing-checkout-information.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Regression
- Page Objects Required:
  - LoginPage
  - InventoryPage
  - CheckoutPage
- Methods Required:
  - navigate()
  - login(username, password)
  - addProductToCart()
  - openCart()
  - clickCheckout()
  - clickContinue()
  - getCheckoutError()
- Assertions Required:
  - Verify the inventory page title is Products.
  - Verify the checkout error contains the expected first-name validation text.
- Screenshot Required: Yes
- Risk: Medium
- Dependencies: None
- Notes:
  - Reuse the existing checkout-page methods and avoid duplicating locator logic.

## Scenario 2: Verify Order Completion Header

- Scenario Number: 2
- Priority: High
- Severity: High
- Module: Checkout
- Feature: Order Completion
- Objective: Verify that users can complete a purchase and see the order completion confirmation header.
- Preconditions:
  - The SauceDemo application is reachable.
  - The user can successfully log in with valid credentials.
  - The inventory page is available.
- Test Data:
  - Username: standard_user
  - Password: secret_sauce
  - First Name: Test
  - Last Name: User
  - Postal Code: 10001
- Steps:
  1. Open the SauceDemo login page.
  2. Log in with the standard user credentials.
  3. Verify the inventory page is displayed and the title reads Products.
  4. Add a product to the cart.
  5. Open the shopping cart.
  6. Click Checkout.
  7. Enter the checkout information values.
  8. Continue through the checkout flow.
  9. Finish the order.
  10. Capture a screenshot of the confirmation screen.
- Expected Result:
  - The order completion header is displayed.
  - The confirmation message reads: Thank you for your order!
  - The screenshot is saved to [screenshots/checkout/order-completion-header.png](../screenshots/checkout/order-completion-header.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Regression
- Page Objects Required:
  - LoginPage
  - InventoryPage
  - CheckoutPage
- Methods Required:
  - navigate()
  - login(username, password)
  - addProductToCart()
  - openCart()
  - clickCheckout()
  - fillCheckoutInformation(first, last, zip)
  - finishOrder()
- Assertions Required:
  - Verify the inventory page title is Products.
  - Verify the completion header text matches Thank you for your order!.
- Screenshot Required: Yes
- Risk: Medium
- Dependencies: None
- Notes:
  - This scenario should reuse the existing checkout flow object methods and preserve the current assertion style.

## Coverage Summary

- The requested checkout scenarios are already aligned with the current framework and page-object design.
- The plan reuses the existing login, inventory, and checkout page objects without introducing duplicate locators or methods.
- These scenarios are suitable for implementation in [specs/checkout.spec.ts](checkout.spec.ts).
