# Login Automation Plan

- Target Application: https://www.saucedemo.com
- Page Object: [pages/LoginPage.ts](../pages/LoginPage.ts)
- Spec File: [specs/login.spec.ts](login.spec.ts)
- Screenshot Folder: [screenshots/login](../screenshots/login)

## Scenario 1: Successful Login

- Scenario Number: 1
- Priority: High
- Severity: High
- Module: Login
- Feature: User Authentication
- Objective: Verify a valid user can log in successfully and navigate to the inventory page.
- Preconditions:
  - The SauceDemo application is reachable.
  - The browser is open and the login page is loaded.
- Test Data:
  - Username: standard_user
  - Password: secret_sauce
- Steps:
  1. Open the SauceDemo login page.
  2. Enter the standard user credentials.
  3. Click the login button.
  4. Capture a screenshot after successful login.
- Expected Result:
  - The user is redirected to the inventory page.
  - The inventory page is visible.
  - The screenshot is saved to [screenshots/login/login-success.png](../screenshots/login/login-success.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Smoke
- Page Objects Required:
  - LoginPage
- Methods Required:
  - navigate()
  - login(username, password)
- Assertions Required:
  - Verify the URL matches the inventory page URL.
  - Verify the inventory page is displayed.
- Screenshot Required: Yes
- Risk: Low
- Dependencies: None
- Notes:
  - Reuse the existing login page object and avoid duplication.

## Scenario 2: Locked User Login

- Scenario Number: 2
- Priority: High
- Severity: High
- Module: Login
- Feature: Error Handling
- Objective: Verify a locked user receives the expected error message and remains on the login page.
- Preconditions:
  - The SauceDemo application is reachable.
  - The browser is open and the login page is loaded.
- Test Data:
  - Username: locked_out_user
  - Password: secret_sauce
- Steps:
  1. Open the SauceDemo login page.
  2. Enter the locked-out user credentials.
  3. Click the login button.
  4. Capture a screenshot after the failed login attempt.
- Expected Result:
  - The error message displayed is:
    - Epic sadface: Sorry, this user has been locked out.
  - The user remains on the login page.
  - The screenshot is saved to [screenshots/login/login-failed.png](../screenshots/login/login-failed.png).
- Actual Result:
  - To be captured during execution.
- Automation Candidate: Yes
- Smoke or Regression: Regression
- Page Objects Required:
  - LoginPage
- Methods Required:
  - navigate()
  - login(username, password)
  - getErrorMessage()
- Assertions Required:
  - Verify the error message contains the expected locked-out-user text.
  - Verify the user stays on the login page.
- Screenshot Required: Yes
- Risk: Medium
- Dependencies: None
- Notes:
  - Reuse the existing error-message handling from the page object.

## Coverage Summary

- The requested login scenarios are compatible with the current framework structure.
- The plan reuses the existing page object methods and the existing screenshot convention.
- These scenarios are suitable for implementation in [specs/login.spec.ts](login.spec.ts).