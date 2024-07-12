class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    /*
        Now, we want that as soon as a User obj is made, it immediately gets a unique id

        When we'll save such things in DB, then MongoDB automatically attaches an _id as 
        soon as we make a user

        we're trying to make similar functionality
    */

    // static keyword restricts any instance of this class from accessing a prop/fnc
    static createId () {
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()); // non-accessible if createId() is static

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe() // accessible since not static

// iphone.createId() // even instance of inherited class can't access a static prop/method
