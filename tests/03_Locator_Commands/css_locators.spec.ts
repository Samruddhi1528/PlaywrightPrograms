import { test, expect } from '@playwright/test'

test("CSS advance locators", async ({ page }) => {
    await page.goto("https://awesomeqa.com/css/")

    //count all spans
    const allSpans = page.locator("div.first > span")
    console.log(await allSpans.count())

    //find first span
    const firstspan = await page.locator("div.first > span").first().textContent()
    console.log("First span text is: " + firstspan)

    const span2 = await allSpans.nth(1).textContent();       // "Span 2"
    const span3 = await allSpans.nth(2).textContent();       // "Span 3!"
    const span5 = await allSpans.nth(4).textContent();       // "Span 5!"
    const lastSpan = await allSpans.last().textContent();    // "Span 7!"

    console.log("First  (Span 1):", firstspan);
    console.log("Second (Span 2):", span2);
    console.log("Third  (Span 3):", span3);
    console.log("Fifth  (Span 5):", span5);
    console.log("Last   (Span 7):", lastSpan);

    // page.locator().click();



    const count = await allSpans.count();
    for (let i = 0; i < count; i++) {
        let span_ith = await allSpans.nth(i).textContent();
        console.log(span_ith);
    }


})