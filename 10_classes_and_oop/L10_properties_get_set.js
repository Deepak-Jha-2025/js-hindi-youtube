// Before classes
// get and set keyword are available only with classes

// function-based syntax (Object-based syntax in next file: L11_object_get_set.js)
function User (email, password) {
    this._email = email
    this._password = password

    // Before get() and set() were introduced with classes, we used function as an object
    // We know function behaves both as a function and an Object, so 
    // func will have access to the prototype of built-in Object (by inheritance)
    
    
    // That's the getter setter property 
    // arg1: 'this' context of the function
    // arg2: property to be overwritten
    Object.defineProperty(this, 'email', {
        // define the properties here
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        // define the properties here
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new User('chai@chai.com', 'chai')


console.log(chai)
console.log(chai._email)
console.log(chai._password)
console.log(chai.email)
console.log(chai.password)