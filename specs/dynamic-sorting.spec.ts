import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('SMOKE @smoke - Validate Dynamic Catalog Sorting & Price Verification', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Navigate to the application
    await loginPage.navigate();

    // Login with valid credentials
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify Inventory page is displayed
    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryTitle)
        .toHaveText('Products');

    // Sort products by Price (Low to High)
    await inventoryPage.sortProducts('lohi');

    // Retrieve all product prices from the DOM
    const prices = await inventoryPage.getProductPrices();

    console.log('Prices from DOM:', prices);

    // Verify prices are in ascending order
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }

    // Verify UI prices match the expected sorted order
    const expectedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(expectedPrices);

    console.log('Expected Sorted Prices:', expectedPrices);

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/dynamic-sorting/dynamic-sorting-validation.png',
        fullPage: true
    });

});