class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

/*
    Now, suppose we're making an LMS, or e-Commerece, then sometimes we may have to
    make this user as Admin or Teacher or Student, and regardless we'll set username 
    for everyone
*/


// In case of prototypes (before class keyword)

// Teacher.__proto__ = User
// Object.setPrototypeOf(teachingSupport, Teacher)


// Using classes (extends keyword)
class Teacher extends User {
    // Now teacher has all functionalities of User class, on top of that we can add more functionalities

    // Same property/functionality will be overwritten
    constructor(username, email, password) {

        // It refers to the extended class User, goes to its constructor, and automatically
        // takes the 'this' context of this class Teacher with it, sets its username

        super(username) // This does the job of what .call() was doing in L4_call.js

        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

// chai.logMe() // Teacher inherited from User, so it has access to its functions
// masalaChai.addCourse() // but vice versa is not true

// console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true (since Teacher inherits from User)