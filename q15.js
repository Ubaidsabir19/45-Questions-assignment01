"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite. */
var guests = ["Ali", "Ahmad", "Farooq", "Zain", "Qasim"];
console.log(`You are all invited ${guests}`);
// Remove guest
let cancelName = "Qasim";
guests.splice(guests.indexOf(cancelName), 1);
// Add new guest
let newGuest = "Aslam";
guests.push(newGuest);
console.log(`You are all invited ${guests}`);
// Print invitation messages for all guests
guests.forEach(function (name) {
    console.log("Dear " + name + ", you are cordially invited to a dinner party at my house!");
});
