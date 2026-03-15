let browsers = ["chrome", "firefox", "edge", "safari"]
console.log(browsers.length)
console.log(browsers)

//Remove multiple elements from the end
browsers.pop()
browsers.pop()
console.log(browsers)

//Add multiple elements at the end
browsers.push("opera", "brave")
console.log(browsers)



//Add multiple elements at the beginning
browsers.unshift("opera", "brave")
console.log(browsers)

//Remove multiple elements from the beginning
browsers.shift()
browsers.shift()
console.log(browsers)

// //Add multiple elements at a specific position
browsers.splice(2, 0, "opera", "brave")
console.log(browsers)

//Remove multiple elements from a specific position
browsers.splice(2, 2)
console.log(browsers)


for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i])
    if (browsers[i] === "opera") {
        console.log("Opera is found at index " + i)
    }
}