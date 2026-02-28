let value = "5"

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String 5 matched");
        break;
    default:
        console.log("Value is not 5 or " + value);
}

//switch case do string comparison i.e. ===
/*
String 5 matched
*/