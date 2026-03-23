//Shallow Copy
//All below will guve us same output
let original = [1, 2, 3]

let copy1 = [...original] //Spread 
console.log(copy1)

let copy2 = original.slice()
console.log(copy2)

let copy3 = Array.from(original)
console.log(copy3)

let copy4 = original.concat()
console.log(copy4)


//===============
copy1.push(99)
console.log(copy1)
console.log(original)

//Deep Copy(used in JSON)
original.push(88)
console.log(copy1)
console.log(original)

let c = original
c.push(30)
console.log(c.length)
console.log(original.length) // it will change as its a deep copy