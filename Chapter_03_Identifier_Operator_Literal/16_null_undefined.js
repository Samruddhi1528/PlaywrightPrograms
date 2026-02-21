//null is intensionally empty value

let age = null;
console.log(age); //null

// Undefined — "not yet assigned"
let marks; //automatically undefined
console.log(marks); //undefined

//equality comparison
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == 0); //false
console.log(null == ""); //false
console.log(undefined == 0); //false
console.log(undefined == ""); //false