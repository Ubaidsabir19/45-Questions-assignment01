"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
function order_sandwich(...items) {
    console.log(`Sandwich with: ${items.join(', ')}`);
}
order_sandwich('ham', 'cheese', 'lettuce', 'tomato');
order_sandwich('turkey', 'bacon', 'avocado');
order_sandwich('peanut butter', 'jelly');
