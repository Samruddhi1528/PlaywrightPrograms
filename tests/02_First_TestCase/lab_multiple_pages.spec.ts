//Run using: npx playwright test tests/First_TestCase/lab_multiple_pages.spec.ts --headed

import { test, chromium } from "@playwright/test";

test("Multiple pages and contexts test", async () => {
    let browser = await chromium.launch({ headless: false });

    // Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

    // Viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();
});