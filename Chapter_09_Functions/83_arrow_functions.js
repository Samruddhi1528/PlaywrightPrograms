//Function expression
const greet = function (name) {
    return `Hello ${name}`
}

console.log(greet("John"))

/*Arrow functions only works when you have single lines
Remove function keyword
Remove return keyword
Remove {} if single line
*/

const counter = n => n * 2
console.log(counter(2))
//here, 0


const greet1 = (name) => `Hello ${name}`
console.log(greet1("John"))



const doubltIt = (num) => num * 2
console.log(doubltIt(2))

//No params
const greet2 = () => `Hello`
console.log(greet2())


//Multiline

const getResult = (score) => {
    if (score >= 35) {
        return "Pass"
    } else {
        return "Fail"
    }
}
console.log(getResult(35))


//=======================My code==================
//function expression:

const func1 = function (name) {
    console.log(`Hello ${name}`)
}

func1("Samruddhi")

//arrow function:
const func2 = (name1) => console.log(`Hello ${name1}`)
func2("Sameer")

//arrow function with multiple parameters:
const func3 = (name2, age) => console.log(`Hello ${name2}, you are ${age} years old`)
func3("Sameer", 25)

//arrow function with multiple parameters and return value:
const func4 = (name3, age1) => {
    return `Hello ${name3}, you are ${age1} years old`
}
console.log(func4("Sameer", 25))