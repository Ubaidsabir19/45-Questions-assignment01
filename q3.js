"use strict";
/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase. */
let myName = "UbAid uR rehMan";
console.log(myName.toUpperCase()); // For Upper case
console.log(myName.toLowerCase()); // For Lower case
// For Title case
let titleCase = "";
for (let i = 0; i < myName.length; i++) {
    if (i === 0 || myName[i - 1] === " ") {
        titleCase += myName[i].toUpperCase();
    }
    else {
        titleCase += myName[i].toLowerCase();
    }
}
console.log(titleCase);
