import { expect, Locator, Page } from '@playwright/test';

export class CareersPage {
    readonly page: Page;
    readonly baseURL: string = "https://symphony.is/careers";
    readonly titleText: string = "Software development and design for the world’s most innovative brands | Symphony";

    hqTitle: Locator;
    hqText: Locator;
    foundedTitle: Locator;
    foundedText: Locator;
    sizeTitle: Locator;
    sizeText: Locator;
    consultingLocationTitle: Locator;
    consultingLocationsText: Locator[];
    engineeringHubsTitle: Locator;
    engineeringHubsText: Locator[];
    clientsTitle: Locator;
    clientsText: Locator;
    certificationsTitle: Locator;
    certificationsText: Locator[];

    constructor(page: Page) {
        this.page = page;
        this.hqTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(1) > strong');
        this.hqText = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(1) > div > div > p > span');
        this.foundedTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(2) > strong');
        this.foundedText = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(2) > div > div > p > span');
        this.sizeTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(3) > strong');
        this.sizeText = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(3) > div > div > p > span');
        this.consultingLocationTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > strong');
        this.consultingLocationsText = [
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(1) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(2) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(3) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(4) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(5) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(6) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(7) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(8) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(4) > div > div > p:nth-of-type(9) > span')
        ];
        this.engineeringHubsTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > strong');
        this.engineeringHubsText = [
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(1) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(2) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(3) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(4) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(5) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(6) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(5) > div > div > p:nth-of-type(7) > span')
        ];
        this.clientsTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(6) > strong');
        this.clientsText = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(6) > div > div > p > span');
        this.certificationsTitle = page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(7) > strong');
        this.certificationsText = [
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(7) > div > div > p:nth-of-type(1) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(7) > div > div > p:nth-of-type(2) > span'),
            page.locator('html > body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li:nth-of-type(7) > div > div > p:nth-of-type(3) > span')
        ];
    }

    async getWorkSubItemsText() {
        const subItemsText = [];
        for (const locator of this.consultingLocationsText) {
            const text = await locator.textContent();
            subItemsText.push(text);
        }
        return subItemsText;
    }

    // async getCategoriesAndValues(): Promise<Map<string, string[]>> {
    //     const categoriesMap = new Map<string, string[]>();
    //
    //     const categories = await this.page.$$(
    //         'xpath=body > div > main > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > section > ul > li > strong'
    //     );
    //
    //     for (const category of categories) {
    //         const categoryText = await category.textContent();
    //
    //         const values = await category.$$('xpath=following-sibling::div//p/span');
    //         const valueTexts = await Promise.all(values.map(value => value.textContent()));
    //
    //         if (categoryText) {
    //             categoriesMap.set(categoryText.trim(), valueTexts.filter(Boolean).map(text => text.trim()));
    //         }
    //     }
    //
    //     return categoriesMap;
    // }

    async goToCareersPage() {
        await this.page.goto(this.baseURL);
    }

    async verifyCurrentUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }
}