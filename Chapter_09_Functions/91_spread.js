function add(a, b, c) {
    return a + b + c
}

let num = [1, 2, 3]
console.log(add(...num))


function hashError(...codes) {
    return codes.some(c => c >= 400)
}

console.log(hashError(200, 201, 404, 500))