const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // --> outdated syntax

// Modern day syntax: use backticks i.e. `` which involves string interpolation
// where we create placeholders where in we can inject the variables directly
// use ${var_name}, where you want to inject var.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another method to declare string using objects
const gameName = new String('hitesh-hc-com')

// console.log(typeof(gameName)) 

// although string has idx/pos like array but it's not an array but an object
// the idx and char at each idx are like key-value pairs(can be accessed using [] operator)

// console.log(gameName[0])
// console.log(gameName.__proto__); // This gives {} as o/p, which is actually not an empty object.


// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes the leading and trailing spaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh')) // --> checks for presence of string and returns boolean

console.log(gameName.split('-'))











