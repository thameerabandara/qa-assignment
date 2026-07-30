import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login', () => {

    test('SMOKE @smoke - Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Navigate
        await loginPage.navigate();

        // Login
        await loginPage.login(
            'standard_ user',
            'secret_sauce'
        );

        // Expected Result
        const expectedUrl = 'https://www.saucedemo.com/inventory.html';

        // Actual Result
        const actualUrl = page.url();

        console.log('Expected URL:', expectedUrl);
        console.log('Actual URL:', actualUrl);

        // Verification
        expect(actualUrl).toBe(expectedUrl);

        await expect(page).toHaveURL(expectedUrl);

        await page.screenshot({
            path: 'screenshots/login/login-success.png',
            fullPage: true
        });

    });

    test('REGRESSION @regression - Failed Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Navigate
        await loginPage.navigate();

        // Invalid Login
        await loginPage.login(
            'locked_out_user',
            'secret_sauce'
        );

        // Expected Result
        const expectedMessage =
            'Epic sadface: Sorry, this user has been locked out.';

        // Actual Result
        const actualMessage =
            await loginPage.getErrorMessage();

        console.log('Expected Error:', expectedMessage);
        console.log('Actual Error:', actualMessage);

        // Verification
        expect(actualMessage).toContain(expectedMessage);

        await page.screenshot({
            path: 'screenshots/login/login-failed.png',
            fullPage: true
        });

    });

});