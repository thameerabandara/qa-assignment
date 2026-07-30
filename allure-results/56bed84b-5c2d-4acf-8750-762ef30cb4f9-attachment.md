# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> SauceDemo Login >> SMOKE @smoke - Successful Login
- Location: specs\login.spec.ts:6:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_ user
      - textbox "Password" [ref=e15]: secret_sauce
      - heading [level=3] [ref=e19]:
        - button [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | 
  4  | test.describe('SauceDemo Login', () => {
  5  | 
  6  |     test('SMOKE @smoke - Successful Login', async ({ page }) => {
  7  | 
  8  |         const loginPage = new LoginPage(page);
  9  | 
  10 |         // Navigate
  11 |         await loginPage.navigate();
  12 | 
  13 |         // Login
  14 |         await loginPage.login(
  15 |             'standard_ user',
  16 |             'secret_sauce'
  17 |         );
  18 | 
  19 |         // Expected Result
  20 |         const expectedUrl = 'https://www.saucedemo.com/inventory.html';
  21 | 
  22 |         // Actual Result
  23 |         const actualUrl = page.url();
  24 | 
  25 |         console.log('Expected URL:', expectedUrl);
  26 |         console.log('Actual URL:', actualUrl);
  27 | 
  28 |         // Verification
> 29 |         expect(actualUrl).toBe(expectedUrl);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  30 | 
  31 |         await expect(page).toHaveURL(expectedUrl);
  32 | 
  33 |         await page.screenshot({
  34 |             path: 'screenshots/login/login-success.png',
  35 |             fullPage: true
  36 |         });
  37 | 
  38 |     });
  39 | 
  40 |     test('REGRESSION @regression - Failed Login', async ({ page }) => {
  41 | 
  42 |         const loginPage = new LoginPage(page);
  43 | 
  44 |         // Navigate
  45 |         await loginPage.navigate();
  46 | 
  47 |         // Invalid Login
  48 |         await loginPage.login(
  49 |             'locked_out_user',
  50 |             'secret_sauce'
  51 |         );
  52 | 
  53 |         // Expected Result
  54 |         const expectedMessage =
  55 |             'Epic sadface: Sorry, this user has been locked out.';
  56 | 
  57 |         // Actual Result
  58 |         const actualMessage =
  59 |             await loginPage.getErrorMessage();
  60 | 
  61 |         console.log('Expected Error:', expectedMessage);
  62 |         console.log('Actual Error:', actualMessage);
  63 | 
  64 |         // Verification
  65 |         expect(actualMessage).toContain(expectedMessage);
  66 | 
  67 |         await page.screenshot({
  68 |             path: 'screenshots/login/login-failed.png',
  69 |             fullPage: true
  70 |         });
  71 | 
  72 |     });
  73 | 
  74 | });
```