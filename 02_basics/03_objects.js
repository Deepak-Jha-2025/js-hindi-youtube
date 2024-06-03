// 2 methods to declare an object
// As a literal & as a constructor

// singleton - When an object is made using constructor, then it is a singleton obj, i.e. only 1 of that type
// not singleton - When declared as a literal


// singleton
// Object.create() // Creating object through the constructor method

// object literals ({} is an empty obj for now, put some values inside it and access it later)

// symbol declaration
const mySym = Symbol("key1")


const JsUser = {
    // There is key-value pairs inside objects
    // key: value

    // In arrays, keys are predefined as indices starting from 0
    // Here, we can define our keys also

    name: "Hitesh",
    "full name": "Hitesh Choudhary", // This value can't be accessed using dot, has to be done using []

    // mySym: "mykey1", // not being used as a Symbol till now, it's a normal key like the rest(which is stored as a string)

    [mySym]: "mykey1", // now being used as a Symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// To access values

// console.log(JsUser.email) // Here no need to give as string "email", dot operator automatically detects it


// console.log(JsUser[email]) // wrong as keys are stored as strings so need to be given as strings "email"
// console.log(JsUser["email"]); // correct (only if trying to access using [] operator)
// console.log(JsUser[age])

// console.log(JsUser."full name"); // wrong 
// console.log(JsUser.full name);   // wrong
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym); // undefined, Symbol value can be accessed only by []
// console.log(JsUser[mySym]);


// To change values
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser); // After this, the property values of this object can't be changed
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); // this ptr is used to refer to the properties of same object
}

// console.log(JsUser.greeting); // returns back a func, doesn't execute it, just returns its ref.
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());