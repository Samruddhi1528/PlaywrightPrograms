// //for loop
// let test = ["login", "checkout", "search"]
// console.log("\nfor loop:")
// for (let i = 0; i < test.length; i++) {
//     console.log(test[i])
// }


// //for ... of (cleanest of values)   
// console.log("\nfor ... of:")
// for (let item of test) {
//     console.log(item)
// }

// //for each
// console.log("\nfor each:")
// test.forEach((item) => console.log(item))

// console.log("\nfor each with index:")
// test.forEach((item, index) => console.log(item, index))

// console.log("\nfor each with index and array:")
// test.forEach((item, index, array) => console.log(item, index, array))


// //entries() -- index + values
// for ([i, text] of test.entries()) {
//     console.log(i, text)
// }

//for in , print index of elements in array
let students = ["john", "doe", "smith"]
for (let student in students) {
    console.log(student, " -> ", students[student])
}