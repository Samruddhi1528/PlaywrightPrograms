let status1 = "active"

let msg = status1 === "active" ? "User is active"
    : status1 === "inactive" ? "User is inactive"
        : "Invalid status";
console.log(msg);

/*
User is active
*/


let name1 = "" ? "Has name" : "No name";
console.log(name1);

/*
No name
*/



let name2 = "" || "Default";    // empty string is falsy
console.log(name2);

/*
Default
*/

let name3 = 0 || "Default";    // 0 is falsy
console.log(name3);

/*
Default
*/


//?? is a null cohesive operator 
let name4 = "" ?? "Default";  // empty string is truthy
console.log(name4);

/*
Double quotes is an output
*/


let name7 = undefined ?? "Default";  // undefined is falsy
console.log(name7);

/*
Default
*/

