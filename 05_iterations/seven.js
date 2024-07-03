
// map() in arrays

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map is similar to forEach, but just returns the result in an array

/* filter returns array of only those values which satisfy the condition automatically
    map returns array of all values, so adding conditions is optional here */

// const newNums = myNumbers.map( (num) => num + 10) // implicit return 


// Chaining: multiple methods can be used at the same time 
// Every chain's result is passed on to the next chain
const newNums = myNumbers
                .map( (num) => num * 10) // here each num passed = myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                .map( (num) => num + 1)  // here each num passed = result of 1st chain = modified myNumbers = [10, 20, 30, ..., 100] ans so on
                .filter( (num) => num >= 40)

console.log(newNums);