let a = "Samruddhi"

if (true) {
    console.log("Before reassigning", a)
    let a = "Bitts"
    console.log("After reassigning", a)
}
console.log("Outside if", a)

/*OUTPUT:
Error will be thrown as let is block scoped
*/