import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";
import { CareersPage } from "../pages/careersPage";

test.describe('Home Page Tests', () => {
    let homePage: HomePage;
    let careersPage: CareersPage;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.close();
    });

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goToHomePage();
    });

    test('should have the correct title', async ({ page }) => {
        expect(await page.title()).toBe(homePage.titleText);
    });

    test('should display Work item', async () => {
        const workMenu = await homePage.getWorkMenu();
        expect(await workMenu.isVisible()).toBeTruthy();
    });

    test('should display Work menu with 6 subitems', async () => {
        const workMenu = await homePage.getWorkMenu();
        await workMenu.click();
        const workSubItems = await homePage.getWorkSubItems();
        expect(workSubItems.length).toBe(6);
        for (const subItem of workSubItems) {
            expect(await subItem.isVisible()).toBeTruthy();
        }
    });

    test('should display How we Work item', async () => {
        const howWeWork = await homePage.getHowWeWork();
        expect(await howWeWork.isVisible()).toBeTruthy();
    });

    test('should display Case Studies item', async () => {
        const caseStudies = await homePage.getCaseStudies();
        expect(await caseStudies.isVisible()).toBeTruthy();
    });

    test('should display About Us item', async () => {
        const aboutUs = await homePage.getAboutUs();
        expect(await aboutUs.isVisible()).toBeTruthy();
    });

    test('should display About Us with 3 subitems', async () => {
        const aboutUs = await homePage.getAboutUs();
        await aboutUs.click();
        const aboutUsSubItems = await homePage.getAboutUsSubItems();
        expect(aboutUsSubItems.length).toBe(3);
        for (const subItem of aboutUsSubItems) {
            expect(await subItem.isVisible()).toBeTruthy();
        }
    });

    test('should display Careers item', async () => {
        const careers = await homePage.getCareers();
        expect(await careers.isVisible()).toBeTruthy();
    });

    test('should display Contact Us item', async () => {
        const contactUs = await homePage.getContactUs();
        expect(await contactUs.isVisible()).toBeTruthy();
    });

    // test('verify categories and values', async ({ page }) => {
    //     await homePage.goToCareers();
    //     const categoriesAndValues = await careersPage.getCategoriesAndValues();
    //
    //     const expectedCategoriesAndValues = new Map<string, string[]>([
    //         ['HQ', ['SFO']],
    //         ['Founded', ['2007']],
    //         // etc.
    //     ]);
    //
    //     for (const [expectedCategory, expectedValues] of expectedCategoriesAndValues) {
    //         expect(categoriesAndValues.has(expectedCategory)).toBeTruthy();
    //         expect(categoriesAndValues.get(expectedCategory)).toEqual(expectedValues);
    //     }
    // });
});