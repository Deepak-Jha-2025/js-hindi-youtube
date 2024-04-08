// based on how data is stored in memory & how it is accessed
// all datatypes are divided into 2 categories

// Primitive (call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23456789907645675667n

// Reference

// Array, Objects, Functions (typeof => return type = object (function for Functions))

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "hitesh", 
    age: 22,
}

let myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)
// Stack mem use => gives a copy of the declared var
// Heap mem use  => gives a reference of the declared variable's memory address

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// https://excalidraw.com/#json=aZtaeO-vfd95NbBak_Enq,rw1rVWHr70-MjgBn6apWEQ