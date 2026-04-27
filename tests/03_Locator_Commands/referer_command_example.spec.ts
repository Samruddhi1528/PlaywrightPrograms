//If we want to test what is the referer for all contenxt in a page i.e. ensure referer is known for all context

import { test } from "@playwright/test";


//whilecreating new context, you can pass extraHTTPHeaders to set any header for all the pages in that context
test("set referer for entire context", async ({ browser }) => {
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");




});