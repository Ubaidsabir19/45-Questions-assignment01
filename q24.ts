/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result for each of the 
following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in a array 
• Test whether an item is not in a array */


let string1 = "hello";
let string2 = "world";
let num1 = 5;
let num2 = 10;
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Tests for equality and inequality with strings
console.log(`Is string1 == 'hello'? I predict True.`);
console.log(string1 == "hello");
console.log(`Is string1 != string2? I predict True.`);
console.log(string1 != string2);

// Tests using the lower case function
console.log(`Is string1 in lower case? I predict True.`);
console.log(string1.toLowerCase() == "hello");
console.log(`Is string2 not in lower case? I predict True.`);
console.log(string2.toLowerCase() != "world");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(`Is num1 == 5? I predict True.`);
console.log(num1 == 5);
console.log(`Is num1 > num2? I predict False.`);
console.log(num1 > num2);
console.log(`Is num2 >= 10? I predict True.`);
console.log(num2 >= 10);
console.log(`Is num2 < num1? I predict False.`);
console.log(num2 < num1);
console.log(`Is num1 <= 5? I predict True.`);
console.log(num1 <= 5);

// Tests using "and" and "or" operators
console.log(`Is num1 > 3 and num2 < 15? I predict True.`);
console.log(num1 > 3 && num2 < 15);
console.log(`Is string1 == 'hello' or num2 == 15? I predict True.`);
console.log(string1 == "hello" || num2 == 15);

// Test whether an item is in a array
console.log(`Is 2 in array1? I predict True.`);
console.log(array1.includes(2));
console.log(`Is 4 in array1? I predict False.`);
console.log(array1.includes(4));

// Test whether an item is not in a array
console.log(`Is 4 not in array2? I predict True.`);
console.log(!array2.includes(4));
console.log(`Is 6 not in array1? I predict False.`);
console.log(!array1.includes(6));