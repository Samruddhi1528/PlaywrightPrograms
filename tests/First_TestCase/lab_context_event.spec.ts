import { test } from '@playwright/test';

test('context events', async ({ browser }) => {
    const context = await browser.newContext();

    // Listen for new pages
    context.on('page', page => {
        console.log('New page opened:', page.url());
    });

    const page = await context.newPage();
    await page.goto('https://playwright.dev');

    await context.close();
});