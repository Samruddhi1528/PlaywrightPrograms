//Function Expression
//Assigning the function directly to a variable. There is no function name, function can be accessed using variable name

const greet = function (name) {
    return `Hello ${name}`
}

console.log(greet("John"))

// Type 4 Function 
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

// console.log(greet("Bob"));
console.log(greet1("Bob"));
console.log(greet2("Bob"));


//===============================My code============

const var1 = function (n1, n2) {
    return n1 + n2;
}

console.log(var1(10, 20));


