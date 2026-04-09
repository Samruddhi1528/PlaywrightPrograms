class TestRunner {
    //Static variable -> Belongs to the class, not to the object

    static totalTest = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name
        TestRunner.totalTest++
        if (passed) {
            TestRunner.passCount++
        }

    }

    static getReport() {
        return `Total Tests: ${TestRunner.totalTest}, Passed: ${TestRunner.passCount}`
    }

    nonStaticMethod() {
        console.log("This is a non-static method");
    }
}

let t1 = new TestRunner("Login Test", true)
let t2 = new TestRunner("Logout Test", false)
let t3 = new TestRunner("Dashboard Test", true)
let t4 = new TestRunner("Profile Test", false)

console.log(TestRunner.getReport());
console.log(t1.nonStaticMethod());
/*
OP:
[Running] node "c:\Users\samee\OneDrive\Desktop\Samruddhi\Plawright AI mastery TTA\PlaywrightPrograms\Chapter_16_OOPS\static_variable.js"
Total Tests: 3, Passed: 2

*/