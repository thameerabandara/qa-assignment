import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test('REGRESSION @regression - Negative Checkout - Missing Mandatory Information', async ({ page }) => {


    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    const checkoutPage = new CheckoutPage(page);



    // Login

    await loginPage.navigate();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    // Verify inventory

    await expect(inventoryPage.inventoryTitle)
        .toHaveText('Products');



    // Add product

    await checkoutPage.addProductToCart();


    // Open cart

    await checkoutPage.openCart();



    // Click checkout

    await checkoutPage.clickCheckout();



    // Try continue without entering details

    await checkoutPage.continueButton.click();



    // Expected validation message

    const expectedError =
        'Error: First Name is required';



    const actualError =
        await checkoutPage.checkoutError.textContent();



    console.log('Expected:', expectedError);

    console.log('Actual:', actualError);



    // Verify error

    expect(actualError)
        .toContain(expectedError);



    await page.screenshot({

        path:'screenshots/checkout/missing-checkout-information.png',

        fullPage:true

    });


});



test('REGRESSION @regression - Verify Order Completion Header', async ({ page }) => {


    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    const checkoutPage = new CheckoutPage(page);



    await loginPage.navigate();


    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await expect(inventoryPage.inventoryTitle)
        .toHaveText('Products');



    await checkoutPage.addProductToCart();


    await checkoutPage.openCart();


    await checkoutPage.clickCheckout();



    await checkoutPage.fillCheckoutInformation(
        'Test',
        'User',
        '10001'
    );



    await checkoutPage.finishOrder();



    // Expected Result
    const expectedHeader =
        'Thank you for your order!';



    // Actual Result
    const actualHeader =
        await checkoutPage.completeMessage.textContent();



    console.log('Expected Header:', expectedHeader);

    console.log('Actual Header:', actualHeader);



    expect(actualHeader)
        .toBe(expectedHeader);



    await page.screenshot({

        path:'screenshots/checkout/order-completion-header.png',

        fullPage:true

    });


});