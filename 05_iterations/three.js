// for of

// ["", "", ""] --> array of strings
// [{}, {}, {}] --> array of objects


// objects, arrays, strings all are iteratable, so applicable to all

// on arrays
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// on strings
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps (stores unique values)
// Map is an object in itself

const map = new Map()

map.set("IN", "India")
map.set('USA', "United States of America")
map.set('Fr', 'France')
map.set("IN", "India") // map doesn't accept duplicate entries

// console.log(map);


// prints every element(key-val pair) of the map as an array
// for (const key of map) {
//     console.log(key);
// }

// using [] we can de-structure the array and hold the key and value separately
// Now, key-value will be printed separately and not binded in a array
for (const [key, value] of map) {
    // console.log(key + " :- " + value);
}


// Objects

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'

    // game1: 'NFS',
    // game2: 'Spiderman'
}

// Not iteratable this way(whether we write keys of object directly or as strings)
for (const [key, value] of myObject) {
    console.log(key + " :- " + value);
}