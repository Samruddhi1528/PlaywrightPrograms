/*A closure is when a function remembers variables from its outer scope
 even after the outer function has finished executing.*/

function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner; //you can return a function if you want to

}


//we can call outer but not inner

outer() //this will run
// inner() //this will give error


let fn_inner = outer();
fn_inner();
