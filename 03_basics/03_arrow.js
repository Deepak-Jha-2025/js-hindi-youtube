// this keyword tells about the 'current context/object referred'

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {

        /* Here, we have set the username as "hitesh", but it may vary everytime we call
        this method for the user object. So, for that 'this' keyword is used. 
        
        If we want to refer to the username variable, we can't do that directly, have to use
        this keyword to refer the current context (values inside the current obj referred by 'this') */

        // console.log(`${username} , welcome to website`);
        console.log(`${this.username} , welcome to website`);

        console.log(this); // prints the current context/obj referred by 'this'
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



// this --> what's the current context in global scope? --> an empty obj in this node.js environment b/z currently there is no current context in global scope

// console.log(this); // {}, but this same line of code gives Window{} in browser console

/* Previously, the js executing engine was found only inside the browsers, but now it has been extracted out into a stand-alone
engine, called node.js, so when that engine is run in the browser, then there the global object/context is the Window object, 
hence, this gives the context 'Window' */


// function chai() {
//     // console.log(this) // if we print 'this' inside some func/expression (instead of global scope), then it's not an empty obj

//     let username = "hitesh"
//     console.log(this.username); // undefined, as 'this' context works only for methods under objects, not normal func/expressions
// }
// chai()


// Expression
// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username)
// }


// Arrow function (similar to expression)
const chai = () => {
    let username = "hitesh"
    console.log(this.username) // undefined
    // console.log(this)       // {}
}
// chai()


// Type 1 (explicit return)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Type 2 (implicit return: no braces{} needed, 1 line statement, so it's assumed to be return value by default, so no need to write return)
// Used in ReactJs

// const addTwo = (num1, num2) => num1 + num2

// can also be wrapped in ()
// const addTwo = (num1, num2) => ( num1 + num2 ) 

// const addTwo = (num1, num2) => {username: "hitesh"} // returns undefined (since {} can't be used in implicit return)
const addTwo = (num1, num2) => ({username: "hitesh"})  // so everything, even obj has to be wrapped in ()

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7,  8]

// myArray.forEach()
