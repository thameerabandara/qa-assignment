import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('SMOKE @smoke - Checkout Validation & Mathematical Accuracy - E2E', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    const checkoutPage = new CheckoutPage(page);

    // Step 1 - Navigate to SauceDemo
    await loginPage.navigate();

    // Step 2 - Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Expected Result:
    // User should navigate to Inventory page
    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryTitle)
        .toHaveText('Products');

    // Step 3 - Add first product to cart
    await checkoutPage.addProductToCart();

    // Step 4 - Open cart
    await checkoutPage.openCart();

    // Step 5 - Verify checkout button exists
    await expect(checkoutPage.checkoutButton).toBeVisible();

    // Step 6 - Click Checkout
    await checkoutPage.clickCheckout();

    // Step 7 - Fill checkout form
    await checkoutPage.fillCheckoutInformation(
        'Test',
        'User',
        '10001'
    );

    // Verify checkout overview page
    await expect(page).toHaveURL(/checkout-step-two/);

    // Get checkout summary values
    const subtotal = await checkoutPage.getSubtotal();

    const tax = await checkoutPage.getTax();

    const total = await checkoutPage.getTotal();

    console.log('Subtotal :', subtotal);
    console.log('Tax      :', tax);
    console.log('Total    :', total);

    // Expected mathematical calculation
    const expectedTotal = Number((subtotal + tax).toFixed(2));

    console.log('Expected Total:', expectedTotal);

    // Verify subtotal
    expect(subtotal).toBeGreaterThan(0);

    // Verify tax
    expect(tax).toBeGreaterThan(0);

    // Verify total calculation
    expect(total).toBe(expectedTotal);

    console.log('✓ Mathematical Validation Passed');

    

    // Step 8 - Finish Order
    await checkoutPage.finishOrder();

    // Expected Result:
    // Order completed successfully
    await expect(checkoutPage.completeMessage)
        .toHaveText('Thank you for your order!');

    console.log('✓ Checkout completed successfully');

    // Screenshot evidence
    await page.screenshot({

        path: 'screenshots/checkout/order-confirmation.png',

        fullPage: true

    });

});