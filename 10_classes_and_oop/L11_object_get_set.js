// Object-based syntax

const User = {
    // Writing '_' before prop name almost is like making it a private prop now

    // Internal storage properties (where actually the values are stored in memmory)
    _email: 'h@hc.com',
    _password: '123',


    // Now, to ensure no one can directly access these values, we have to declare getter and setter

    // Public properties: those defined/modified by get/set and by these names only we'll access the prop outside the class
    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this.email = value
    }
}

// We can use factory function in case of Object-based syntax
// Just like 'new' is constructor fnc, Object.create() is factory fnc (similarly available for Array also)

// Object.create() // {}

const tea = Object.create(User) // Based on User obj, create an obj and give its ref to tea
console.log(tea.email);