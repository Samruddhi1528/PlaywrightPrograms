//Understand -> 

//Normal function
function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Status code is valid")
    } else {
        console.log("Status code is not valid")
    }
}

validateStatusCode(200)
validateStatusCode(400)
validateStatusCode(500)


//Function Expression
const validateStatusCode_Exp = function (statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Status code is valid")
    } else {
        console.log("Status code is not valid")
    }
}

//Arrow function
const validateStatusCode_Arrow = (statusCode) => {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Status code is valid")
    } else {
        console.log("Status code is not valid")
    }
}