//If switch is without break then it will execute all the cases after the matched case
console.log("Hello world");

let day = 5;
// 0-> Sunday
// 1-> Monday
// 2-> Tuesday
// 3-> Wednesday
// 4-> Thursday
// 5-> Friday
// 6-> Saturday

switch (day) {
    case 0:
        console.log("Sunday");

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    case 4:
        console.log("Thursday");

    case 5:
        console.log("Friday");

    case 6:
        console.log("Saturday");

    default:
        console.log("Invalid day");
}

/*
Hello world
Friday
Saturday
Invalid day
*/