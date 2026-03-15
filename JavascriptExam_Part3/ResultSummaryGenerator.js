/*You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, 
where status can be `"passed"`, `"failed"`, or `"skipped"`. 
Write a JavaScript function that prints a summary report 
with total steps, passed count, failed count, skipped count, total duration,
 and a comma-separated list of failed step names.

Input:
results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
Output:
Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form
 */
let results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
let totalSteps;
let passedCount;
let failedCount;
let skippedCount;
let totalDuration;
let failedSteps;

function calculateResult(results) {

    //calculate total steps
    console.log(results)
    totalSteps = results.length;
    console.log("Total Steps: ", totalSteps)

    //calculate passed steps
    passedCount = results.filter(item => item.status === "passed").length
    console.log("Passed Count: ", passedCount)

    failedCount = results.filter(item => item.status === "failed").length
    console.log("Failed Count: ", failedCount)

    skippedCount = results.filter(item => item.status === "skipped").length
    console.log("Skipped Count: ", skippedCount)

    totalDuration = results.reduce((acc, curr) => acc + curr.durationMs, 0)
    console.log("Total Duration: ", totalDuration, "ms")

    failedSteps = results.filter(item => item.status === "failed").map(item => item.name).join(", ")
    console.log("Failed Steps: ", failedSteps)

}


calculateResult(results)