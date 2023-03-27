"use strict";
/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, ...args) {
    let car = { manufacturer, model };
    args.forEach((arg, index) => {
        if (index % 2 === 0) {
            let key = arg;
            let value = args[index + 1];
            car[key] = value;
        }
    });
    return car;
}
let car = create_car('Toyota', 'Camry', 'color', 'red', 'year', 2020);
console.log(car);
