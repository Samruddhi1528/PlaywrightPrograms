/*

1. Go to https://app.vwo.com/#/login
2. Click on freetrial button
3. Fill the gmail address
4. Verify the warning message
5. Click on I agree checkbox


*/
import { test, expect } from '@playwright/test';

test("Free trial testing", async ({ page, context }) => {

    // Navigate to VWO
    await page.goto("https://app.vwo.com/#/login");

    // Handle new tab opening
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),

        page.getByRole('link', {
            name: /Start a FREE TRIAL/i
        }).click()

    ]);

    // Wait for new page load
    await newPage.waitForLoadState();

    // Fill email textbox
    await newPage.getByRole('textbox', { name: /email/i }).pressSequentially("abc@gmail.com", { delay: 200 })


    // Warning message
    const errorMessage = newPage.getByText(
        "gmail.com doesn't look like a business domain. Please use your business email."
    );
    await expect(errorMessage).toBeVisible();

    // Assertion
    await expect(errorMessage).toHaveText(
        "gmail.com doesn't look like a business domain. Please use your business email."
    );

});