// For Loop

// 1️⃣ Print "Hello" 5 times
console.log("Print 'Hello' 5 times")
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// 2️⃣  Print numbers from 1 to 10
console.log("Print numbers from 1 to 10")

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3️⃣ Print even numbers from 1 to 20
console.log("Print even numbers from 1 to 20")

for (let num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        console.log(num);
    }
}

// 4️⃣ Print the sum of first 10 natural numbers
console.log("Print the sum of first 10 natural numbers")
let result = 0;
for (let i = 1; i <= 10; i++) {
    result += i
}
console.log(result)

// 5️⃣ Print the multiplication table of 5
console.log("Print the multiplication table of 5")
for (let i = 1; i <= 10; i++) {
    console.log(5 * i)
}