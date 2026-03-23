let [first, second, third] = [10, 20, 30]
console.log(first)  //10
console.log(second) //20
console.log(third)  //10


let [fourth, fifth, ...sixth] = [11, 22, 33, 44, 55, 66]
console.log(fourth) //11
console.log(fifth)  //22
console.log(sixth) //33, 44, 55, 66