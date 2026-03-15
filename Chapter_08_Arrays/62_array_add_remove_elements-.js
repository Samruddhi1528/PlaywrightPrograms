let arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)

arr.pop()
console.log(arr)

//Add duplicate values
arr.push(4) // It will just add the duplicate value as well
console.log(arr)

//Add multiple elements
arr.push(5, 6, 7)
console.log(arr)

//Remove multiple elements
arr.pop()
arr.pop()
arr.pop()
console.log(arr)

//Add to the beginning
arr.unshift(0)
console.log(arr)

//Remove from the beginning
arr.shift()
console.log(arr)


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//splice(startIndex, deleteCount, item1, item2, ...)
arr1.splice(2, 3) //this will delete 3 elements starting from index 2
console.log(arr1)

arr1.splice(2, 3, 99) //this will delete 3 elements starting from index 2 and add 99 at that position
console.log(arr1)

arr1.splice(2, 3, 51, 52) //deleting the elements and adding multiple elements at that position
console.log(arr1)

arr1.splice(2, 0, 61) //Don't delete any element and add 61 at that position
console.log(arr1)
