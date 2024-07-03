
// const coding = ["js", "ruby", "java", "python", "cpp"]

// Does forEach return any value? If yes, what?

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item; // still return value will be undefined whether we manually return or not
// })

// console.log(values) // returns undefined, i.e. does not return anything `


/* So for those cases when we want to return any value (under any condition) from an array, we
   use the filter operation. It accesses the values of the array similarly using callback func
   like forEach, but returns an array of values satisfying the given conndition */


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// This also takes callback function as argument/parameter

// const newNums = myNums.filter( (num) => num > 10 ) // using implicit return type of arrow func to return all values > 4

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) // using explicit return type to manually return the values


// ************* Can be done using for each also ****************
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


// Below is an example of what kind of values we'll be getting back from the database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Suppose user sets the filter on the webpage as "History", now we've to display the user
// only the history related books, i.e. those books(objects) which have genre(property) === 'History'

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History' 
})

console.log(userBooks);
