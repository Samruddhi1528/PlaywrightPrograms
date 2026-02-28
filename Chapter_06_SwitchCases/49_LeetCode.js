/*Triangle Classifier:


Write a program that classifies a triangle based on its side lengths.
Given three input values representing the lengths of the sides, 
determine if the triangle is equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or scalene (no sides are equal). 
Use an if-else statement to classify the triangle. */


// let side1 = 10, side2 = 10, side3 = 10; // Equilateral
// let side1 = 10, side2 = 10, side3 = 20; // Isosceles
let side1 = 10, side2 = 20, side3 = 30; // Scalene

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}

/*
Output:
Scalene
*/