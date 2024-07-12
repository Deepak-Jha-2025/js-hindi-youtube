// ES6

// class keyword

// class User {
//     // When an object is initialized from the class, (i.e. new keyword is actually used behind the scenes)
//     // then the constructor is called
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene (without the class keyword)

// Creating a func (this acts as the constructor)
// i.e. it behaves as an object as well
// That's why we can inject methods/properties in 
// its prototype
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword()) 
console.log(tea.changeUsername())