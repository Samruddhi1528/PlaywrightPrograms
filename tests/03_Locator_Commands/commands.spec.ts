import { test, expect } from "@playwright/test"

test("Go with different waitUntill options", async ({ page }) => {

    /*page.goto options along with URL:
        1. waitUntil - option tells Playwright at which stage it should consider the page "loaded" and move to the next line of your test.
        2. commit - the server has responded. HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.
        3. load - everything is loaded including images, CSS, fonts, and scripts. This is the DEFAULT. Use for most tests.
        4. networkidle - no network requests for 500ms. The page is completely quiet. Use for SPAs (React, Angular, Vue) that fetch data via API calls AFTER the initial HTML loads.
        5. domcontentloaded - the HTML is fully parsed and the DOM tree is built. CSS, images, and fonts may still be loading. Use when you need elements in the DOM but don't care about visuals.
        6. 
    */

    await page.goto("https://app.com/page1", { waitUntil: "commit" });
    console.log("commit: server responded");

    // Wait for HTML to be parsed
    await page.goto("https://app.com/page2", { waitUntil: "domcontentloaded" });
    console.log("domcontentloaded: HTML parsed");

    // DEFAULT — wait for everything (images, CSS, scripts)
    await page.goto("https://app.com/page3", { waitUntil: "load" }); //DEFAULT - moslty used
    console.log("load: all resources loaded");

    // SLOWEST — wait for all network activity to stop
    await page.goto("https://app.com/page4", { waitUntil: "networkidle" });
    console.log("networkidle: no requests for 500ms");

})