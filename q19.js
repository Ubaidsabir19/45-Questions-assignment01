"use strict";
/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number
of people you are inviting to dinner. */
let guestList = ["Ahmad", "Ali", "Aslam", "Qasim", "Farooq"];
console.log(`You are inviting ${guestList.length} people to dinner.`);
// add new guest  EX-14
guestList.unshift('Hammad');
console.log(`You are inviting ${guestList.length} people to dinner.`);
// add Ubaid and Nasir starting at index 2   EX-18
guestList.splice(2, 0, 'Ubaid', 'Nasir');
console.log(`You are inviting ${guestList.length} people to dinner.`);
