/*Very very imp - remember the logic

It will remember attempts value*/


function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };

    return tryAgain;

}

let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));


/*OP
Attempt 1 / 3 for Login
Attempt 2 / 3 for Login
Attempt 3 / 3 for Login
Login exceeded max retries(3)

*/