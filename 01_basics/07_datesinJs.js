// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 11, 24) // Method-1 to declare a date
// let myCreatedDate = new Date(2023, 11, 24, 5, 3) // Method-2 to declare a date
let myCreatedDate = new Date("2023-01-14") // Method-3 
// let myCreatedDate = new Date("01-14-2023") // Method-4 
// console.log(myCreatedDate.toLocaleString())


// TimeStamps
// let myTimeStamp = new Date().getTime() // gives the current time stamp in milliseconds
let myTimeStamp = Date.now()              // gives the current time stamp in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()) // Converts the date into milliseconds (measured from a reference date and year as in mdn docs)

console.log(Math.floor(Date.now()/1000)); // convert from millisec into sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is` // Above methods are used with string interpolation

newDate.toLocaleString('default', {
    weekday: "long"
    // like this specific properties can be altered inside the object
})
