/*Exercise 2 — Spot the Bug

What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);



*/

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

//There is nothing wrong in the code but sort function will sort teh array elements based on lexical analysis or alphabetical order. Thus for digits we need to provide the cunstion

let newsorted = responseTimes.sort((a, b) => a - b)
console.log("Fastest:", newsorted[0])

/*OUTPUT:
Fastest: 1200
Fastest: 85
*/