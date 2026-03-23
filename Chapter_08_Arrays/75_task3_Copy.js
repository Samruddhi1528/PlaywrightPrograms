/*What is the output and why? How would you fix it?

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status); 

*/
//This is a shallow copy hence it will not create a new array but it will create a new reference to the same array
//Thus when we change the status of the first element in the second array it will also change the status of the first element in the first array


let suite1 = [{ name: "login", status: "pass" }];

// Using structuredClone for a deep copy (Modern JavaScript)
// Alternatively: let suite2 = JSON.parse(JSON.stringify(suite1));
let suite2 = structuredClone(suite1);

suite2[0].status = "fail";
console.log(suite1[0].status); // Output will be "pass" since it's a deep copy