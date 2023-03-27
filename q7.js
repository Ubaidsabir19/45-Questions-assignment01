"use strict";
/* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in
the number 8. Be sure to enclose your operations in print statements to see the results. */
// General Function for all Arithmetic operators
function allFunction(p1, p2, condition) {
    if (condition === "+") {
        return p1 + p2;
    }
    else if (condition === "-") {
        return p1 - p2;
    }
    else if (condition === "*") {
        return p1 * p2;
    }
    else if (condition === "/") {
        return p1 / p2;
    }
}
// Add value
let addValue = allFunction(3, 5, "+");
console.log(addValue);
// Subtract value
let subValue = allFunction(13, 5, "-");
console.log(subValue);
// Multiply value
let multiValue = allFunction(2, 4, "*");
console.log(multiValue);
// Divide value
let divideValue = allFunction(64, 8, "/");
console.log(divideValue);
