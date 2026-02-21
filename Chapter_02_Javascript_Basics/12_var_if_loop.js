var a = "Samruddhi"

if (true) {
    console.log("Before reassigning", a)
    var a = "Bitts"
    console.log("After reassigning", a)
}
console.log("Outside if", a)

//Above code will get executed as var is function scoped

/*OUTPUT:
Before reassigning undefined
After reassigning Bitts
Outside if Bitts
*/