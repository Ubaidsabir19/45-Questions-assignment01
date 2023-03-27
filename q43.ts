/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name. */

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
  }
  
  function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
  }
  
  let original_magicians: string[] = ['Ali', 'Ahmad', 'Ubaid', 'Qasim'];
  let great_magicians: string[] = make_great([...original_magicians]);
  show_magicians(original_magicians);
  console.log("-----");
  show_magicians(great_magicians);
  export{}