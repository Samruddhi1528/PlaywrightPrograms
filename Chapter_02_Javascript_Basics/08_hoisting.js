/*console.log(a);
// above statement will throw an error

var a = "Sam"
//Thus hoisting means that the variable is moved to the top of the scope with undefined value
*/

//Phase 1 --> Memory allocation
// var a = undefined
// var b = undefined

//Phase 2 --> Execution
console.log(a + b);
var a = "Hello", b = "World"
console.log(a + b);

/*OUPUT:
NaN
HelloWorld*/