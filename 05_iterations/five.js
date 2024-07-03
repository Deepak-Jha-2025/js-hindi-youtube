
// for-each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// Automatically, everytime this callback function will execute and everytime it 
// will pass each value of the array as an argument/parameter 
// Once the value is passed, we can process it inside the function body

// This is a callback function so it does not need a name
// coding.forEach( function (val) {
//     console.log(val);
// } )


// Similarly, it can be used with arrow functions also
// No need to name the function again, as it need not be 
// stored anywhere, it's a callback function

// coding.forEach( (item) => {
//     console.log(item);
// } )


// Even an already declared function can be used as a callback function inside forEach 
// just by giving the reference of the function (i.e. it's name), but if a callback func
// is created inside the foreach, then no need to name it
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); // Just give the reference here
// coding.forEach(printMe()); // Dont execute it by giving ()


// forEach can access/be passed with more than 1 parameter (the val of the array, the index of that value, the entire array itself)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


// Using forEach in case of array of objects
// Iterating on array of objects is a very common operation, since
// the values coming from the databases will be in array format, and
// every value of the array is an object

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "jave",
        languageFileName: "java"
    }, 
    {
        languageName: "python",
        languageFileName: "py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})
