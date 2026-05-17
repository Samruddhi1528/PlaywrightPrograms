/*
1. Go to URL
2. Click on Sign Up button
3. Fill up the credentials and submit
4. Once dashboard is up, verify the initial Total Balance
5. lcik on transfer funds tab
6. Fillup the form and transfer 5000
7. Verify that the amount is deducted from the account balance

*/

import { test, expect } from "@playwright/test"

test("Transfer the funds", async ({ page }) => {
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")
    page.getByText("Sign Up").click();
    await page.waitForTimeout(2000);

    await expect(page.locator("input[type='text']")).toBeVisible()
    await page.locator("input[type='text']").fill("Abby Dsouza");
    await page.locator("input[type='email']").fill("abc@gmail.com");
    await page.locator("input[type='password']").fill("abc@124");
    await page.getByText("Create Account").click();

    const initialBalance = page.locator('h3[class*="text-3xl"]');
    console.log("Initial balance: " + initialBalance);
    console.log(typeof initialBalance);
    await expect(initialBalance).toHaveText('$50,000.00');

    await page.getByText("Transfer Funds").click()

    await page.locator('input[type="number"]').fill("5000");

    await page.locator('input[type="text"]').fill("Rent");
    await page.getByText("Continue").click();
    await page.getByText("Confirm Transfer").click();

    await page.getByText("Dashboard").click()

    await expect(initialBalance).toHaveText('$45,000.00');
})