"use strict";
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(message = 'I love TypeScript', size = 'large') {
    console.log(`Making a ${size} shirt with the message "${message}"`);
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt('I love TypeScript', 'medium');
// Make a small shirt with a different message
make_shirt('TypeScript is awesome!', 'small');
