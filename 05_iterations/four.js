
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// in case of objects, for-of loop can't be used, so we use for-in loops

for (const key in myObject) {
    // console.log(key); // prints all the keys

    // console.log(myObject[key]); // prints all the values corresponding to keys

    // console.log(`${key} is shortcut for ${myObject[key]}`);
}


// for-in loop in case of arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // prints all the keys i.e. indices (0-based)

    // console.log(programming[key]); // prints all the values
}

/* for-of loop prints all the values(entire element, key+value) directly
    
   for-in loop prints only the keys and the values can be accessed using [] and putting the keys in there*/



   // for-in loop in case of maps

// const map = new Map()

// map.set("IN", "India")
// map.set('USA', "United States of America")
// map.set('Fr', 'France')
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key); // prints nothing b/z maps are not iterable in this way
// }



