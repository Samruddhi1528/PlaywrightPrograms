//Q1
console.log(`${["pass", "fail", "skip"].indexOf("skip")}`)
console.log(`${["pass", "fail", "skip"].indexOf("Skip")}`) //non existin element returns -1

//Q2
/*Which method returns a new array without affecting the original one
push()
splice() 
filter() -> Answer
sort()
*/

//Q3
let a = [1,2,3,4]
let copy = a    //reference copying now c also points to same array
copy.push(5)
console.log(a.length) //4 as its a deep copy

//Q4
/*let codes = [200, 404, 500, 201] which correctly checks if any request failed

- a) `codes.every(c => c >= 400)` 
- b) `codes.includes(c => c >= 400)` 
- c) `codes.some(c => c >= 400)`  -> ans
- d) `codes.find(c => c >= 400) === true` 

*/


//Q5
/* What does `[10, 1, 21, 2].sort()` return?

- a) `[1, 2, 10, 21]` 
- b) `[1, 10, 2, 21]`  -> ans
- c) `[21, 10, 2, 1]` 
- d) `[10, 1, 21, 2]` 

*/

//Q6
/* What is the output?
let tests = ["login", "search", "checkout"];
console.log(tests.at(-1));

- a) `undefined` 
- b) `"login"` 
- c) `"checkout"` 
- d) `-1` -> ans

*/
let tests = ["login", "search", "checkout"];
console.log(tests.at(-1)); //last element

//Q7
/*Which method would you use to turn `["2024", "03", "07"]` into `"2024-03-07"`?

- a) `concat()` 
- b) `join("-")` -> ans
- c) `toString()` 
- d) `flat()` 
 */

//Q8
/* What does `Array.isArray({length: 3, 0: "a"})` return?

- a) `true` 
- b) `false` -> ans its an array like object but not an array
- c) `undefined` 
- d) Error

*/
console.log(Array.isArray({length: 3, 0: "a"}))

//Q9
/*What is the output? ( ++D) 

let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
  acc[r] = (acc[r] || 0) + 1;
  return acc;
}, {});
console.log(counts.pass);

a) 1

b) 2 -> ans

c) 3

d) undefined

 */

let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
  acc[r] = (acc[r] || 0) + 1;
  return acc;
}, {});
console.log(counts.pass);