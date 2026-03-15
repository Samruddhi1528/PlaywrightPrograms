/*Normalize Locator Error Messages
Given a raw Playwright error message string,
write a function that trims extra spaces, 
converts the message to lowercase, 
collapses multiple spaces into a single space,
and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`. 
Input:
rawMessage = " Locator not found after TIMEOUT "
Output:
Normalized: locator not found after timeout Category: TIMEOUT

*/

function normalizeLocatorError(rawMessage) {
    let normalized = rawMessage.trim().toLowerCase().replace(/\s+/g, ' ');
    if (normalized.includes("timeout")) {
        console.log("TIMEOUT");
    } else if (normalized.includes("locator")) {
        console.log("LOCATOR");
    } else {
        console.log("GENERAL");
    }
}

normalizeLocatorError(" Locator not found after TIMEOUT ")