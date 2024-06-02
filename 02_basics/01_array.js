// array

const myArr = [0, 1, 2, 3, 4, 5] // datatypes of elements can be same or different
const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // This will automatically add the square brackets
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insertion at start of array
// myArr.shift()    // deletion from start of array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // binds the array into a string thus changing it's type from array to string (comma-separated)

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)


