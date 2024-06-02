const score = 400 // automatically detects its type as number
// console.log(score);

const balance = new Number(100); // explicitly define the datatype
// console.log(balance);

// console.log(balance.toString().length) // using method of Number object to convert to string, then string methods can be used on it
// console.log(balance.toFixed(2)) // for precision values

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); // inserts commas as per Indian(by default US if not specified) standards for readability


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()) // >= 0 && <1
// console.log((Math.random()*10) + 1) // >= 1 && <= 10
// console.log(Math.floor(Math.random()*10) + 1) // >= 1 && <= 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);