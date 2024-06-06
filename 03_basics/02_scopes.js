// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



/* Variable can be declared in all 3 ways above. But let and const were introduced b/z
var has an issue, it doesn't follow the 'block scope' rule.

{} --> These are called scope. Even obj have these {], but that is object declaration.
If these are with any func, if-else block, then it is the scope of that program/func/
if-else block.  

Anything written in the global scope is accessible in the block scope but vice versa is not true */


// everything outside the {} is the 'global scope'
// var c = 300
let a = 300

// Whatever written inside the if block or any other {} block is the 'block scope'
if(true) {
    let a = 10   // follows the 'block scope' restriction/rule
    const b = 20 // follows the 'block scope' restriction/rule

    // console.log("Inner: ", a);

    // var c = 30   // does not follow the 'block scope' rule --> it can be accessed even outside this scope though it is declared inside
    // c = 30       // same problem as above, whether we write var or not. 
}

// console.log(a); // gives error 'a not defined' since beyond scope
// console.log(b); // gives error 'b not defined' since beyond scope

// console.log(c);    // prints 30



// ******************************** Nested Scope ************************************
function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website); // gives error since website is beyond the block scope of two() where it's declared

    two()
}

one()

/* Everytime we declare and call a function, a separate call-stack/scope is formed for them.
   In case of nested functions/scopes, the child function is able to access the variables of the
   parent function.
 */

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error



// +++++++++++++++++++++++ interesting +++++++++++++++++++++++

// Basic function

addOne(5) // can be called before the declaration b/z here simply declaration is there

function addOne(num) {
    return num + 1
}


// Expression (like a variable holidng a function instead of a value)

addTwo(5) // can'te be called before the declaration b/z here along with declaration, we're holding the value in a variable too, so can't access it before declaration. This is called "hoisting".

const addTwo = function (num) {
    return num + 2
}
