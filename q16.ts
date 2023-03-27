/* More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner. 
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a 
bigger dinner table. 
• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */


let guests = ['Ahmad', 'Ali', 'Aslam', 'Farooq'];

// Print the original guest list
for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, please come to dinner tonight.`);
}

// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add a new guest to the beginning of the array
guests.unshift('Umer');

// Add a new guest to the middle of the array
guests.splice(2, 0, 'Usama');

// Add a new guest to the end of the array
guests.push('Qasim');

// Print the new guest list
for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, please come to dinner tonight.`);
}

export{}