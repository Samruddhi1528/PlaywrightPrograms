let userName = "admin"
let password = "admin123"

if (userName == "admin" && password == "admin123") {
    console.log("Login successfull")
} else if (userName != "admin" || password != "admin123") {
    console.log("Incorrect username or password")
}
else {
    console.log("Login failed")
}