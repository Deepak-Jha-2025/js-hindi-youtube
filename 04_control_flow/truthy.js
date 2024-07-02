// Suppose we query user's email from the database
const userEmail = []

// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {} --> (any non-empty string), function(){} --> empty function

// if(userEmail.length === 0) {
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }


// Nullish Coalescing Operator (??): here everything is seen based on 2 keywords: null and undefined

/* Sometimes, when we call from database or use firebase, appwrite etc. then we directly don't get the
   response, rather we get 2 values. So, there are chances that we get null response or don't get any
   response i.e. undefined, then our code structure can get affected. To tackle those cases, we use 
   this operator, this special case will be studied in databases. */

// let val1 = 5 ?? 10
// let val1 = null ?? 10
let val1 = null ?? 10 ?? 20 // the 1st value after null will be assigned, so val1 = 10 and not 20

console.log(val1);

// Terniary operator

// condition ? true : false
const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");;
