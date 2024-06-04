// singleton (using constructor)

// const tinderUser = new Object() // creates an empty singleton object
const tinderUser = {}              // creates an empty non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// Optional chaining (the ? inserts a conditional check, like if fullname exists then only go on looking for further properties)
// console.log(regularUser.fullname?.userfullname.firstname);


// to combine objects (like arrays)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // This will lead to similar problems like in arrays, objects inside objects

// The {} is an optional parameter, but to give it ensures that the objects passed as parameters are not altered
// Hint: The 1st arg is always the target({}), remaining all objects are sources (obj1, obj2, ....)
// const obj4 = Object.assign({}, obj1, obj2, obj3)


// Use spread operator (...)
const obj4 = {...obj1, ...obj2, ...obj3} // 1st spread each obj into its individual values, then combine them into a single obj
// console.log(obj4);


// When values are retured from databases, they're returned as array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))    // o/p type is array
// console.log(Object.values(tinderUser))  // o/p type is array
// console.log(Object.entries(tinderUser)) // o/p type is array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ************************  de-structuring(of obj) *****************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// Instead of repeatedly writing the above using dot operator, we can destructure that obj as:
// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor)


// API intro

// The below obj without a name is a JSON. Previously, values from the backend used to return as XML 
// structure (complex), now they're returned as JSON (in here, both keys and values should be strings)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Basically, we use fetch() method in js/api to call some url, in response we'll get 
// JSON data in the api. Then, we'll convert it into obj and extract each value.


// Sometimes, we'll also get APIs in array format (not necessarily always obj)
// consisting of objects
[
    {},
    {},
    {}
]