// Object literal

// Literally making an object
/*
    In Js, this object literal is termed as the most basic unit, 
    just like in C++, Java we have classes. 
*/

const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        // console.log(this) // refers to the current context/object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

/*
    this in global context: in this node environment, 'this' = {} = empty object

    However, this global context changes, if we switch to browser.
    In browser, we have many api access like fetch, browserAccess, DOM.

    So, in browser, 'this' = Window object, which is the global object/context
*/
// console.log(this) 


/*
    Now, suppose we have map() method
    
    How does it distinguish b/w objects? Like which object to apply on?
    we know there is just 1 map() method, so how does it know the current context?

    - All is done using the 'this' keyword

    we may have 2 user objects, and just 1 map() func which has already gone in the 
    prototype
*/



// Constructor functions
// const promiseOne = new Promise()
// const date = new Date()

/*
    'new' keyword is the constructor function
    It allows us to create multiple instances with a single object literal
    More like it helps us create a new context
*/

/*
    func just runs once
    it has only 1 global execution context => only 1 instance will be created for it

    And in global exec context, this is an empty object = {}
    So, using dot operator, we can simply insert properties into it
*/
function User(username, loginCount, isLoggedIn) {
    this.username = username // LHS = variable, RHS = passed arg/parameter
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // Method can also be added
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // this is returned implicitely, so we may or may not return it
    return this // returns the newly modified obj (with above 3 values)
}

// Writing below code without new keyword would overwrite the data of userOne, the 1st instance
// meaning only one instance is created and keeps on getting updated in Js

// const userOne = User("Hitesh", 12, true)
// const userTwo = User("ChaiaurCode", 11, false)

// Just use new keyword to create a new instance everytime and avoid the above issue
const userOne = new User("Hitesh", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)

// console.log(userOne);
// console.log(userTwo); // a different copy this time, no overwrite

console.log(userOne.constructor); // O/P => constructor is reference of itself


/*
    new keyword: 

    1. On using new keyword, 1st an empty object is created (this is called an instance)
       Like 'this' creates an empty object {} everytime

    2. Constructor function is called b/z of 'new' keyword, it packs any arguments passed

    3. All the arguments are injected into the 'this' context

    4. We got the result of the function
*/
