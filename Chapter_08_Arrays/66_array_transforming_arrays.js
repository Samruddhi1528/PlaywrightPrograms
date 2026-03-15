//Arrays manipulation
let scores = [45, 82, 91, 62, 73]

//map - transforms each and every element and return a new array but number of elements are same.

let grades = scores.map(s => s > 70 ? "Pass" : "Fail")
console.log(grades)

//filter - returns a new array with elements that satisfy the condition but number of elements can be less than original array.
let passed = scores.filter(s => s > 70)
console.log(passed)

//reduce - reduces the array to a single value
//acc (accumulator) — holds the running total as reduce iterates through the array.
//curr — the current element being processed.
//0 — the starting value for acc on the very first iteration
let sum = scores.reduce((acc, curr) => acc + curr, 0)
console.log("sum: ", sum)

let avg = scores.reduce((acc, curr) => acc + curr, 0) / scores.length
console.log("average: ", avg)


//flat - flattens the nested array
let nested = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]]
console.log(nested.flat())