import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('REGRESSION @regression - Negative Checkout - Missing Mandatory Information', async ({ page }) => {

    // Arrange
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    const expectedError = 'Error: First Name is required';

    // Act
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(inventoryPage.inventoryTitle).toHaveText('Products');

    await checkoutPage.addProductToCart();
    await checkoutPage.openCart();
    await checkoutPage.clickCheckout();
    await checkoutPage.clickContinue();

    const actualError = await checkoutPage.getCheckoutError();

    console.log('Expected:', expectedError);
    console.log('Actual:', actualError);

    // Assert
    expect(actualError).toContain(expectedError);

    await page.screenshot({
        path: 'screenshots/checkout/missing-checkout-information.png',
        fullPage: true
    });
});
