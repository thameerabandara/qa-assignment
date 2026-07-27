import { Page, Locator } from '@playwright/test';


export class InventoryPage {


    readonly inventoryTitle: Locator;
    readonly sortDropdown: Locator;
    readonly productPrices: Locator;


    constructor(private page: Page) {


        this.inventoryTitle =
            page.locator('.title');


        this.sortDropdown =
            page.locator('[data-test="product-sort-container"]');


        this.productPrices =
            page.locator('.inventory_item_price');

    }



    async sortProducts(option:string) {

        await this.sortDropdown
            .selectOption(option);

    }



    async getProductPrices(): Promise<number[]> {


        const prices =
            await this.productPrices.allTextContents();


        return prices.map(price =>
            Number(price.replace('$',''))
        );

    }


}