function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));       // 25
console.log(multipleBy5.power);    // 2

/*
    {} --> what is this exactly?
     By default, there are some contexts already set.

     prototype gives us methods & internal properties 
     also, the context of 'this' is available in prototype
*/
console.log(multipleBy5.prototype) // {}


/*
    Everything in JS is an object. (Refer: https://excalidraw.com/#json=KnSbYssHp_1BP1Lf44Qn_,O7tX4BKMZf4jWj8MpsD-1Q)
    Even functions are objects as well (alongside their default function nature)

    All the properties, working, functionality of functions do behave like 'functions', but if we want then
    we can make anything behave like an object (even functions) b/z at the end of the day everything roots up
    to being an Object (prototypal inheritance). Prototype ref of Object is null, i.e. Object is the last thing
    we can go upto in the prototypal inheritance. 

    Even prototype reference of function is also Object
*/


function createUser(username, score) {
    // this keyword is also connected to Prototype
    // As func is an obj, so like this we can inject properties

    // to avoid confusion b/w the variables declared inside and the parameters passed
    // we either name the variables different
    // or we use 'this' to distinguish
    this.username = username
    this.score = score
}

// Like this, we can inject methods
createUser.prototype.increment = function () {
    // score++ // directly score++ does not give context, whose scroe to incrememt, so use 'this' to provide that context

    // Now that, through prototype, we've injected the increment() function in the createUser
    // whose score will it increase? Since both are using same func createUser(), and increment()
    // function does not have the context (it doesn't know who called it)

    this.score++ // 'this' = jisne bhi bulaya, uske paas jaao = current context
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}


// Now we're passing values in the createUser function
// but we may have different users

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe() // undefined error
/*
    We still can't directly call any method that we injected in its prototype (undefined error)
    
    Properties and methods have been injected in the prototype of the function createUser()
    But when using the function creatUser(), we transferred the values into the 2 variables
    chai and tea, then we didn't explicitly specify them about these additional properties, 
    we have to tell them about this, else they'll be undefined, those properties will be undefined

    Regarding these additional propeties can be specified using the 'new' keyword
*/


const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the 
newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the 
newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned.

*/