// Higher-Order Functions
//A whale fish who eats fish and returns back the fish too :D
// A function that takes a function as argument or returns a function.


//Declare thebig fish which will consume the small fishes
function runWithLogging(testfn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished: ${testName} → ${result}`);
    return result;
}

//Declare the small fish functions which needs to be sent as args to main function
function loginTest() {
    return "pass";
}
function loginTestFAILED() {
    return "fail";
}


//Finally call big fish and send the smaller ones to it
runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFAILED, "Dashboard Failed Test");

