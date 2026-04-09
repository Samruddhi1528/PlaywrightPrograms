// 1. What is the output of the below code?

console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}!`;
}

/*OP
Hello, Alice!
*/

// 2. What is the output?

// console.log(getStatus(200));
// const getStatus = (code) => code >= 200 ? "ok" : "error";

/*OP
ReferenceError: Cannot access 'getStatus' before initialization
*/


// 3. What does this function return?

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
analyze();

/*OP
null
*/


// 4. What is the output?

function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

/*OP
3
*/

/*
5. Which is a pure function?
 a) function log(msg) { console.log(msg); }
 b) function add(a, b) { return a + b; }
 c) function getTime() { return Date.now(); }
 d) function push(arr, val) { arr.push(val); return arr; }

op:
B

 */

// 6. What is the output?

function test(...args) {
    return args.length;
}
console.log(test("login", "pass", 200, true));

/*OP
4
*/


// 7. What is the output?

const obj = {
    env: "staging",
    getEnv: () => {
        return this.env;
    }
};
console.log(obj.getEnv());

/*
OP
ReferenceError: getEnv is not defined

*/

// 8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);

/*
OP
[3, 5, 7]
*/


// 9. What is the output?

function run(fn) {
    return fn("Login");
}
console.log(run(name => `Running: ${name}`));
/*

OP
running: Login
*/

// 10. What is the output?

function outer() {
    let x = 10;
    function inner() {
        let x = 20;
        return x;
    }
    return x + inner();
}
console.log(outer());

/*
OP
30
*/

