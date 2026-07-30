# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> SauceDemo Login >> SMOKE @smoke - Successful Login
- Location: specs\login.spec.ts:6:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     readonly page: Page;
  6  |     readonly username: Locator;
  7  |     readonly password: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly errorMessage: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 | 
  13 |         this.page = page;
  14 | 
  15 |         this.username = page.locator('[data-test="username"]');
  16 |         this.password = page.locator('[data-test="password"]');
  17 |         this.loginButton = page.locator('[data-test="login-button"]');
  18 |         this.errorMessage = page.locator('[data-test="error"]');
  19 |     }
  20 | 
  21 |     async navigate() {
> 22 |         await this.page.goto('https://www.saucedemo.com');
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  23 |     }
  24 | 
  25 |     async login(username: string, password: string) {
  26 | 
  27 |         await this.username.fill(username);
  28 | 
  29 |         await this.password.fill(password);
  30 | 
  31 |         await this.loginButton.click();
  32 |     }
  33 | 
  34 |     async getErrorMessage() {
  35 |         return await this.errorMessage.textContent();
  36 |     }
  37 | }
```