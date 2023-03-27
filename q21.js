"use strict";
/* They think of something you could store in a TypeScript Object. Write a program that creates
 Objects containing these items. */
const user = {
    username: "Ubaid ur rehman",
    password: "pa$$word123",
    lastLogin: new Date(),
    preferences: {
        theme: "dark",
        language: "en"
    }
};
console.log(user.username);
console.log(user.password);
console.log(user.lastLogin);
console.log(user.preferences.language);
console.log(user.preferences.theme);
