
// Callback Functions
//A callback is a function passed as an argument to another function, to be called later.
//similar to higher order but argument fuction is called las always


function runTest(testName, callback) {
    let result = "pass";
    // 100 lines
    callback(testName, result)
}

function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}

runTest("loginTest", onComplete)


