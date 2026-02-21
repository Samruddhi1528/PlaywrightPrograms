let age = 20;

if (age > 18) {
    console.log("Eligible for vote");
} else if (age == 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible for vote");
}

if (age > 25) {
    console.log("Eligible for marriage");
} else if (age >= 18 && age < 25) {
    console.log("Perfectly eligible for marriage");
} else {
    console.log("Not Eligible for marriage");
}