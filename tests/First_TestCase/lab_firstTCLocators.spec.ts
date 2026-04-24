import { test, expect } from "@playwright/test"

test("My test testcase", async ({ page }) => {
    //Go to the URL
    await page.goto("https://app.vwo.com")

    //Check the title  of the page
    await expect(page).toHaveTitle("Login - VWO")

    //find the element using locator. Find the vwo image on the page
    const image_vwo = page.locator("img")

    //check the image is visible
    await expect(image_vwo).toBeVisible()

})