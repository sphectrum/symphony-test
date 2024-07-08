import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly baseURL: string = "https://symphony.is";
    readonly titleText: string = "Software development and design for the world’s most innovative brands | Symphony";

    workMenu: Locator;
    workSubItems: Locator[];
    howWeWork: Locator;
    caseStudies: Locator;
    aboutUs: Locator;
    aboutUsSubItems: Locator[];
    careers: Locator;
    contactUs: Locator;
    aboutUsCompany: Locator;
    aboutUsCompanyMetaDetails: Locator;


    constructor(page: Page) {
        this.page = page;
        this.workMenu = page.locator('header').getByRole('link', { name: 'work' }).nth(0);
        this.workSubItems = [
            page.locator('header').getByRole('link', { name: 'Industrial' }),
            page.locator('header').getByRole('link', { name: 'Healthcare' }),
            page.locator('header').getByRole('link', { name: 'Consumer and Retail' }),
            page.locator('header').getByRole('link', { name: 'Financial services and Insurance' }),
            page.locator('header').getByRole('link', { name: 'Tech, Media and Telecom' }),
            page.locator('header').getByRole('link', { name: 'Private Equity' })
        ];
        this.howWeWork = page.locator('header').getByRole('link', { name: 'How We Work' });
        this.caseStudies = page.locator('header').getByRole('link', { name: 'Case Studies' });
        this.aboutUs = page.locator('html > body > div > main > div:nth-of-type(1) > header > div > div:nth-of-type(1) > div > nav > ul > li:nth-of-type(4) > a > span');
        this.aboutUsSubItems = [
            page.locator('html > body > div > main > div:nth-of-type(1) > header > div > div:nth-of-type(1) > div > nav > ul > li:nth-of-type(4) > div > ul > li > ul > li:nth-of-type(1) > a'),
            page.locator('html > body > div > main > div:nth-of-type(1) > header > div > div:nth-of-type(1) > div > nav > ul > li:nth-of-type(4) > div > ul > li > ul > li:nth-of-type(2) > a'),
            page.locator('html > body > div > main > div:nth-of-type(1) > header > div > div:nth-of-type(1) > div > nav > ul > li:nth-of-type(4) > div > ul > li > ul > li:nth-of-type(3) > a')
        ];
        this.careers = page.locator('header').getByRole('link', { name: 'Careers' });
        this.contactUs = page.locator('header').getByRole('link', { name: 'Contact Us' });
        this.aboutUsCompany = page.locator('html > body > div > main > div:nth-of-type(1) > header > div > div:nth-of-type(1) > div > nav > ul > li:nth-of-type(4) > div > ul > li > ul > li:nth-of-type(1) > a')
        this.aboutUsCompanyMetaDetails = page.locator('ul[class=\'pageMetaDetails--list\']');
    }

    // Homepage methods
    async goToHomePage() {
        await this.page.goto(this.baseURL);
    }

    // Element methods
    async getWorkMenu() {
        return this.workMenu;
    }

    async getWorkSubItems() {
        return this.workSubItems;
    }

    async getHowWeWork() {
        return this.howWeWork;
    }

    async getCaseStudies() {
        return this.caseStudies;
    }

    async getAboutUs() {
        return this.aboutUs;
    }

    async getAboutUsSubItems() {
        return this.aboutUsSubItems;
    }

    async goToAboutUsCompany() {
        await this.aboutUs.click();
        return this.aboutUsCompany.click();
    }

    async getCareers() {
        return this.careers;
    }

    async goToCareers() {
        return this.careers.click();
    }

    async getContactUs() {
        return this.contactUs;
    }

    async verifyCurrentUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }
}