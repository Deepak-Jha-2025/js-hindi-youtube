const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); // since arrays can take any type of element, even objects (like arrays) so the entire dc_heros
                                // array will be pushed as a single element in the marvel_heros array

// console.log(marvel_heros)           
// console.log(marvel_heros[3][1]) 

// const allHeros = marvel_heros.concat(dc_heros) // concat returns a new array combining both, while push modifies the original array
// console.log(allHeros); // Now all elements are merged as single elements into a single array


// Easier, more preferrable method

// Use spread operator (denoted by 3 dots, ...) --> spreads the array into its individual elements

const all_new_heros = [...marvel_heros, ...dc_heros] // adv over concat is that concat can take only 1 array to add into existing array, 
                                                     // using spread operator however, we can add more than 1 arrays, into the existing array


// Now, we'll get the spread out values, i.e. all elements will be present alone (no element will be an array or something)
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Infinity means all the depths of subarrays will be handled on its own (whatever depth be it)

console.log(real_another_array) // gives a single array, with all elements spread out as single elements



/* Sometimes, when we select data from any webpage, it comes in different format like nodelist, object, string but 
   suppose we want it as array to run a loop, then: 
*/
console.log(Array.isArray("Hitesh")) // checks if array or not
console.log(Array.from("Hitesh"))    // converts string into array

// This however, return an empty array [], as here we have to specify 1st whether to make array of its keys or values.
console.log(Array.from({name: "Hitesh"}));

// To make an array of multiple elements or multiple arrays
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));