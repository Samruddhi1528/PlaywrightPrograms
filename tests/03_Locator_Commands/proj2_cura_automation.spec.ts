/*

1. Go to https://katalon-demo-cura.herokuapp.com/
2. Click on the Make Appointment button
3. Enter the username and password
4. Click on the login button
5. Verify that the URL is now changed to this: https://katalon-demo-cura.herokuapp.com/#appointment 
6. The page contains make appointments. Make Appointment

*/

import { test, expect } from '@playwright/test'

test("Validate the make appointment feature", async ({ page }) => {

    //Step1: Navigate to the URL
    page.goto("https://katalon-demo-cura.herokuapp.com/")

    //Step2: click on Make appointment button
    page.click("#btn-make-appointment")

    //Step3: Create the locators
    const username = page.locator("#txt-username")
    const password = page.locator("#txt-password")

    //Step 4: Enter the credentials and click on Login button
    await page.waitForTimeout(2000);
    await username.fill("John Doe")
    await password.fill("ThisIsNotAPassword")
    await page.locator("#btn-login").click()

    //Step5: Verify the url
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment")

    //Step6: Verify the make appointment on the home page
    await page.waitForTimeout(2000);
    await expect(page.locator("//h2[text()='Make Appointment']")).toBeVisible()

})