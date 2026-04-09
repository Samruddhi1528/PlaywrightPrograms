/*
//Left hand side pattern
*
* *
* * *
* * * *
* * * * *

Hint: Print * only if j<=i else space
*/

for (let i = 1; i <= 5; i++) {
    let row = " "
    for (let j = 1; j <= i; j++)
        row += "* "
    console.log(row)
}

/*
OP:
 * 
 * * 
 * * * 
 * * * * 
 * * * * * 

*/