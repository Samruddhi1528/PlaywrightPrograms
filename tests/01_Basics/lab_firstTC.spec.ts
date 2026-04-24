/*.spec indicates to the test runner that this is a test file.
 .ts indicates this is a TypeScript file.
 'async' is used to ensure the test runs asynchronously.
test - is a function that is used to define a test.
expect - is a function that is used to make assertions.
we can run the test using the command 'npx playwright test'
=> is an arrow function
we can have multiple tests in a test file


*/


import { test, expect } from '@playwright/test'

test('Verify the title', async ({ page }) => { // page is available from playwright test

    //navigate to the URL
    await page.goto('https://app.vwo.com') //await is added because page returns a Promise

    let title = page.title()
    console.log(title)
    //verify the title of the page
    await expect(page).toHaveTitle('Login - VWO') //toHavetitle also returns the promise


})