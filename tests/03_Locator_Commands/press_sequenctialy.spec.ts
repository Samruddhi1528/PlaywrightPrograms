//This will type very slowly, like a type writter

import { test, expect } from '@playwright/test'

test("CSS advance locators", async ({ page }) => {
    await page.goto("https://awesomeqa.com/practice.html")
    // await page.locator('[name="firstname"]').fill("Testing user")
    await page.locator('[name="firstname"]').pressSequentially("Testing user", { delay: 200 })
    await page.waitForTimeout(5000)

    await page.goto("https://app.vwo.com/login");
    await page.goBack();
    await page.waitForTimeout(5000);



})
