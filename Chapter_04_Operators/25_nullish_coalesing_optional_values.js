//If value is null then make it default value
// let val = null ?? "default"

//if we encounter null value then we might end up getting Null Pointer Exception
let val = null

val = val + "Samruddhi"
console.log(val)

//thus we can assign value to null

let val1 = null ?? "default"
val1 = val1 + "Samruddhi"

console.log(val1)