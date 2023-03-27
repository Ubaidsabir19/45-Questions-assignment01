/* Favorite Fruit: Make a array of your favorite fruits, and then 
write a series of independent if statements that check for certain fruits in your array. 
• Make a array of your three favorite fruits and call it favorite_fruits. 
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
  If the fruit is in your array, the if block should print a statement, such as You really like bananas! */


let favoriteFruits: string[] = ['banana', 'mango', 'pineapple'];

if (favoriteFruits.includes('banana')) {
  console.log("You really like bananas!");
}

if (favoriteFruits.includes('mango')) {
  console.log("You really like mangoes!");
}

if (favoriteFruits.includes('pineapple')) {
  console.log("You really like pineapples!");
}


// Not found or No Output
if (favoriteFruits.includes('strawberry')) {
  console.log("You really like strawberries!");
}

// Not found or No Output
if (favoriteFruits.includes('kiwi')) {
  console.log("You really like kiwis!");
}