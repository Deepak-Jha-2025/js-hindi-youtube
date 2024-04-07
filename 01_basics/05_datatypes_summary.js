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