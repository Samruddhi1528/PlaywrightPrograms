/*Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503]; 

*/

let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if ALL responses are successful (200–299)
let result = responses.every(code => code >= 200 && code <= 299)
if (result) console.log("All responses are successful")
else console.log("Not all responses are successful")


//2. Find the FIRST non-success code
let result1 = responses.find(code => code < 200 || code > 299)
console.log(`First unsuccessfull response: ${result1}`)


//3. Return all unique error codes
let errorCodes = responses.filter(codes => codes < 200 || codes > 299)
let result2 = [...new Set(errorCodes)]
console.log(`Unique error codes: ${result2}`)

/*OUTPUT:
Not all responses are successful
First unsuccessfull response: 404
Unique error codes: 404,500,503

*/