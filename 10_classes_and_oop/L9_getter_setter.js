class User {
    constructor(email, password) {
        this.email = email
        
        this.password = password
        // Once we've manually defined the getter and setter functions, then the passed arg password
        // will ultimately reach the get() and set() and will be set there only

        // So, now this constructor won't set that property for which we've defined the getter setter (password)
        // b/z we've overwritten that property
    }

    // we can apply getter and setter on any property

    /*
        To get any value from outside the class, we have get()
        To set any value inside the class, we have set()
    */

    // for all properties that we create, automatically by their name, their corresponding getter and setter are created as methods
    get password() {
        // return this.password.toUpperCase() --> this will still cause error even after making changes in setter

        // return this._password.toUpperCase() // so same change here also 
        return `${this._password}hitesh`
    }

    // Now that we've defined the password property's getter, we must define its setter as well
    // else we won't be able to set the password property's value using constructor by passing any arg (it won't accept it)

    set password(value) {
        // It'll set some value to some property, so it must be passed, for that 1 arg needed
        // this.password = value
        
        /*
        NOTE: while setting the value, if both setter and constructor are trying to set the same property's value
        then Stack overflow error occurs. Similar error can occur with getter as well
        */

        // The solution is to create an entirely new property (a new name, say, _password) b/z now it won't matter what the user passes
        // or what we're referring it in constructor(i.e. the password parameter), that property will now be set by its setter (once we've 
        // customly defined its getter setter), but we've to make the same change in the getter function as well else same error will occur

        this._password = value // sets the value in the DB (value = password passed by the user)
    }

    // Similarly for email property
    get email () {
        return this._email.toUpperCase()
    }

    set email (value) {
        this._email = value // value = email passed while declaring the object
    }
}

const hitesh = new User("h@hitesh.ai", "abc")

// console.log(hitesh.password); // clearly prints the password (but sometimes we've to avoid showing such crucial data)

/*
    In some cases, we make such properties in classes, whose access has to limited to only authorized personnel.
    Or if some un-authorized person tries to access it, then we either deny them the access or encrypt the data.

    For such scenarios only we have our getter and setter (they are present by default in every class)
    and they have some default behaviour

    For our case, we have to return an error if someone tries to access our password
*/

console.log(hitesh.password); // now the get() will return the converted password
console.log(hitesh.email)