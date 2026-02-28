//switch without break --> Fall through case
let fruit = "banana"

switch (fruit) {
    case "apple":
        console.log("Apple is a fruit");
    case "banana":
        console.log("Banana is a fruit");
    case "orange":
        console.log("Orange is a fruit");
    default:
        console.log("Invalid fruit");
}

//Above code doesnt have break statement thus it will print all the cases after the matched case
/*
Banana is a fruit
Orange is a fruit
Invalid fruit
*/
