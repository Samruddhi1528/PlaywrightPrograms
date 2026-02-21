console.log(greeting);   // Output: undefined
let greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"

// Behind the scenes:
// let greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"

/*
OUTPUT: This will throw an error as TDZ will be active
*/