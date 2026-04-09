//2D arrays - Common operations

let scores = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0))
console.log(`Row sum: ${rowSum}`)

//Flatten array
let flatArray = scores.flat()
console.log(`Flatten array: ${flatArray}`)

//even numbers
let evenNumbers = scores.flat().filter(num => num % 2 === 0)
console.log(`Even numbers: ${evenNumbers}`)

let suitResults = [
    ["Pass", "Fail", "Pass"],
    ["Fail", "Pass", "Pass"],
    ["Pass", "Pass", "Fail"]
]

for (let i = 0; i < suitResults.length; i++) {
    for (let j = 0; j < suitResults[i].length; j++) {
        console.log(suitResults[i][j])
    }
}