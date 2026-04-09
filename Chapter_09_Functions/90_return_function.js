function getStatusCode(code) {
    if (code >= 200 && code <= 300) return "success"
    if (code >= 400 && code <= 500) return "client error"
    if (code >= 500 && code <= 600) return "server error"
    return "unknown"
}

console.log(getStatusCode(200))
console.log(getStatusCode(404))
console.log(getStatusCode(500))
console.log(getStatusCode(600))