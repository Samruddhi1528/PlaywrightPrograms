//Sorting - Lexical or alpha numeric soprting
let fruits = ["apple", "banana", "cherry", "date", "fig"]

console.log(fruits.sort()) //alphabetical order
console.log(fruits.reverse()) //reverse order

let nums = [10, 1, 21, 2]
nums.sort()
console.log(nums) // [10,1,2,21] wrong sorting


//Correct sorting - Ascending order
let nums1 = [10, 1, 21, 2]
nums1.sort((a, b) => a - b)
console.log(nums1) // [1,2,10,21]

//Correct sorting - Descending order
let nums2 = [10, 1, 21, 2]
nums2.sort((a, b) => b - a)
console.log(nums2) // [21,10,2,1]