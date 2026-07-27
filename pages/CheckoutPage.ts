import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    readonly addToCartButton: Locator;
    readonly cartButton: Locator;
    readonly checkoutButton: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;

    readonly continueButton: Locator;
    readonly finishButton: Locator;

    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    readonly completeMessage: Locator;

    // Added for negative testing
    readonly checkoutError: Locator;


    constructor(page: Page) {

        this.page = page;

        this.addToCartButton =
            page.locator('[data-test^="add-to-cart"]').first();

        this.cartButton =
            page.locator('.shopping_cart_link');

        this.checkoutButton =
            page.locator('[data-test="checkout"]');


        this.firstName =
            page.locator('[data-test="firstName"]');

        this.lastName =
            page.locator('[data-test="lastName"]');

        this.postalCode =
            page.locator('[data-test="postalCode"]');


        this.continueButton =
            page.locator('[data-test="continue"]');

        this.finishButton =
            page.locator('[data-test="finish"]');


        // Checkout summary validation
        this.itemTotal =
            page.locator('.summary_subtotal_label');

        this.tax =
            page.locator('.summary_tax_label');

        this.total =
            page.locator('.summary_total_label');


        // Order completion validation
        this.completeMessage =
            page.locator('.complete-header');


        // Negative scenario validation message
        this.checkoutError =
            page.locator('[data-test="error"]');

    }



    async addProductToCart() {

        await this.addToCartButton.click();

    }



    async openCart() {

        await this.cartButton.click();

    }



    async clickCheckout() {

        await this.checkoutButton.click();

    }



    async fillCheckoutInformation(
        first: string,
        last: string,
        zip: string
    ) {

        await this.firstName.fill(first);

        await this.lastName.fill(last);

        await this.postalCode.fill(zip);

        await this.continueButton.click();

    }



    // Used for negative test - click continue without data

    async clickContinue() {

        await this.continueButton.click();

    }



    async getCheckoutError(): Promise<string | null> {

        return await this.checkoutError.textContent();

    }



    async getSubtotal(): Promise<number> {

        const text =
            await this.itemTotal.textContent();

        return Number(
            text?.replace('Item total: $', '')
        );

    }



    async getTax(): Promise<number> {

        const text =
            await this.tax.textContent();

        return Number(
            text?.replace('Tax: $', '')
        );

    }



    async getTotal(): Promise<number> {

        const text =
            await this.total.textContent();

        return Number(
            text?.replace('Total: $', '')
        );

    }



    async finishOrder() {

        await this.finishButton.click();

    }

}