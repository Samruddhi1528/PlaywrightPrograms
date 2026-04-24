/*
Browser - chrome
Context - fresh session, isolated cookies. Similar to Profiles. Contexts shares nothing
Page - a tab inside the context

We dont have to cretae them manually, fixtures inject them automatically

*/

import { test, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test('Manual browser context and page test', async () => {
    // LEVEL 1: Launch browser — heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched");

    // LEVEL 2: Create context — fresh session, isolated cookies
    let context: BrowserContext = await browser.newContext();
    console.log("Context created");

    // LEVEL 3: Open page — a tab inside the context
    let page: Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://example.com");
    console.log("Title:", await page.title());

    // Cleanup — reverse order
    await page.close();
    await context.close();
    await browser.close();
});