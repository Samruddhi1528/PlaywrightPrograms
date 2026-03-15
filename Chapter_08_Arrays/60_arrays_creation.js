let fruits = []; //Empty array

//Array with elements - index starts from 0
let fruits_fresh = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits_fresh);


//Array with numbers
let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr.length) //length is a property not function
console.log(arr[5]) //This will be undefined not index out of bound error like in Java


//Array with mixed data types
let arr1 = [1, "Apple", true, 3.14]
console.log(arr1)

//Array with duplicate values
let arr2 = [2, 3, 2, 3, 2, 3]
console.log(arr2)

//Array with objects
let arr3 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]
console.log(arr3)

//Array with functions
let arr4 = [function () { console.log("Hello") }, function () { console.log("World") }]
console.log(arr4)

//Array with array
let arr5 = [1, 2, [3, 4], 5]
console.log(arr5)



//Array constructor
let arr7 = new Array(3) //Create an array with empty slots
console.log(arr7)
console.log(arr7.length)

let arr8 = new Array(3, 4, 5)
console.log(arr8)




let test = Array.of(1, 2, 3, 4, 5)
console.log(test)
console.log(test[0])





//from keyword
let arr6 = Array.from("hello") //This will split all the elements
console.log(arr6)



