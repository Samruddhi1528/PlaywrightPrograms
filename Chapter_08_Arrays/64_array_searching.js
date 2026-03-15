let result = ["pass", "fail", "skip", "pending", "blocked", "skip"]

console.log(result.indexOf("skip")) //2
console.log(result.indexOf("noresult")) //-1
console.log(result.lastIndexOf("skip")) //5

console.log(result.includes("skip")) //true
console.log(result.includes("noresult")) //false


//find- returns the first element that satisfies the condition
console.log(result.find((item) => item === "skip")) //skip

let a = [10, 13, 20, 24, 45]
console.log(a.find((item) => item > 20)) //24

//findIndex
console.log(result.findIndex((item) => item === "skip")) //2

//findLastIndex
console.log(result.findLastIndex((item) => item === "skip")) //5

