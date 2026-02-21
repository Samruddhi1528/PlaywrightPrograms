//var - Function scoped

var a = 20 //global scope
console.log(a)

//Definition of function
function printHello() {
    var a = 20 // local scope -> 20
    console.log("function scope " + a);
    if (true) {
        var a = 30     //30
        console.log("if scope " + a);
    }
    console.log("function scope after if " + a); // 30
}

//Calling of a function
printHello()

//let - Block scoped

let b = 20 // global scope

console.log(b)

function printB() {
    console.log("Hello world")
    let b = 30
    console.log(b)
    if (true) {
        let b = 50;
        console.log(b)//50
    }
    console.log(b)//30
}
printB()


/*Errorneous conditions

let a = 10
let a = 10

It will not allow redundant CSSStyleDeclaration

let b=9
var b=5

This will not allow same name declaration*/


//const - Block scope and cannot be reassigned

const pi = 3.14159

console.log(pi)

