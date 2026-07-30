# Checkout E2E Automation Plan

- Target Application: https://www.saucedemo.com
- Page Objects: [pages/LoginPage.ts](../pages/LoginPage.ts), [pages/InventoryPage.ts](../pages/InventoryPage.ts), [pages/CheckoutPage.ts](../pages/CheckoutPage.ts)
- Spec File: [specs/checkout-e2e.spec.ts](checkout-e2e.spec.ts)
- Screenshot Folder: [screenshots/checkout](../screenshots/checkout)

## Scenario: Checkout Validation & Mathematical Accuracy - E2E

- Scenario Number: 1
- Priority: High
- Severity: High
- Module: Checkout
- Feature: End-to-End Checkout Validation
- Objective: Verify that a user can complete the checkout flow end to end and that the checkout summary totals are mathematically accurate.
- Preconditions:
  - The SauceDemo application is reachable.
  - The user can successfully log in with valid credentials.
- Test Data:
  - Username: standard_user
  - Password: secret_sauce
  - First Name: Test
  - Last Name: User
  - Postal Code: 10001
- Steps:
  1. Open the SauceDemo login page.
  2. Log in with the standard user credentials.
  3. Verify the URL contains /inventory.
  4. Verify the inventory page title reads Products.
  5. Add the first product to the cart.
  6. Open the cart.
  7. Verify the checkout button is visible.
  8. Click Checkout.
  9. Enter the checkout information values.
  10. Verify the checkout overview page URL contains /checkout-step-two/.
  11. Retrieve the subtotal, tax, and total values from the UI.
  12. Validate that subtotal and tax are greater than zero and that total equals subtotal plus tax.
  13. Complete the order.
  14. Verify the confirmation message reads Thank you for your order!.
  15. Capture a screenshot after order confirmation.
- Expected Result:
  - The user reaches the checkout overview page.
  - The subtotal, tax, and total values are retrieved successfully.
  - The total matches the subtotal plus tax.
  - The order confirmation message is displayed.
  - The screenshot is saved to [screenshots/checkout/order-confirmation.png](../screenshots/checkout/order-confirmation.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Smoke
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
  - getSubtotal()
  - getTax()
  - getTotal()
  - finishOrder()
- Assertions Required:
  - Verify the URL contains /inventory.
  - Verify the inventory title is Products.
  - Verify the checkout button is visible.
  - Verify the URL contains /checkout-step-two/.
  - Verify subtotal is greater than 0.
  - Verify tax is greater than 0.
  - Verify total equals subtotal plus tax.
  - Verify the confirmation header is Thank you for your order!.
- Screenshot Required: Yes
- Risk: Medium
- Dependencies: None
- Notes:
  - Reuse the existing checkout-page helpers and preserve the current assertion style.
