/*
Automate the app.vwo.com login page:

Steps:
1. Lunch the vwo app.
2. Fill the invalid credentials.
3. Click on login.
4. Validate the error message


Rule 2 - Css Selector 
id -> #
class -> .

*/

import { test, expect } from '@playwright/test'

test('Validate invalid login error message', async ({ page }) => {

    //Go to app.vwo.com
    await page.goto("https://app.vwo.com")

    //Create username textbox element and enter invlaid credentials
    await page.getByRole("textbox", { name: "email" }).fill("admin1")


    //Create password textbox element and enter invalid credentials
    await page.getByRole("textbox", { name: "password" }).fill("password")


    await page.getByRole('button', { name: 'Sign in', exact: true }).click();


    await expect(page.locator("#js-notification-box-msg")).toContainText("Your email, password, IP address or location did not match")

})

