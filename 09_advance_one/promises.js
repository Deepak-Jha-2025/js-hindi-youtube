/*
    Mostly, we just consume Promises (Sometimes, we do create promises as well)
    Let's create different types of Promises
*/

/*
    Promise is an Object (just like Array, String, or any other Object)

    So, in JS, if want another instance of an Object, i.e. same as like we take an instance of a class
    We can take an instance of an Object(or Promise, here) using the new keyword
*/

// const obj1 = new Object()
// const arr1 = new Array()
// const str1 = new String()

// Similarly (Promise is also available directly as an Object in Js)
// argument: callback fnc with 2 parameters: resolve and reject
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB Calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve() // this ensures connection of the resolve parameter and the .then() method
    }, 1000)
})


// Above is creation of promise, now is consuming promise

// arg: callback
promiseOne.then(function () {
    console.log("Promise consumed");
}) // connected with resolve only if resolve() method is called in the async task of the promise created
// So, this .then() method will execute only when resolve() is called in the promise callback (in any kind of async task)

/*
    The promise consumed o/p will always be after the asyn output, i.e. the promise will always be consumed
    after the async task is done. This is b/z 1st the async task is completed, then as soon we call resolve()
    the promise consumed part runs.
*/



// Creating promises (type 2, without storing in variables)
/* 
    Now, this created promise may be bringing a network request, or maybe handling a file,
    whatever after 1s or given timeout, when it eventually completes, then the entire 
    task completes, and resolve() informs .then() to execute.

    Our simple task compared to XMLHttpRequest here is that:
    1. We create a promise
    2. It'll have resolve and reject
    3. If it will resolve, i.e. resolve() will be called, then .then() will be executed
    4. If it will reject, i.e. reject() will be called, then .catch() will be executed
    5. In the end, .finally() will execute by default
*/
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})


// 3rd Promise
const promiseThree = new Promise(function (resolve, reject) {
    // Suppose, we've received some data from the network, so we need to pass on that
    // data to the consumption of the promise (i.e. to the .then() function)
    // this can be done using the resolve() method

    setTimeout(function () {
        // Suppose this function brought some data from some network or some file system
        // Now, when we'll consume that promise, then we'll use .then() and in that .then() 
        // method, we'll do the main work, so these data must be returned/passed there

        // So, to pass the data/values from this promise creation to .then(), we'll 
        // pass it to resolve() method as parameters, mostly this data passed will be an object
        // (maybe an array, or a func)

        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

// The passed data/object in the resolve() can be accessed as parameter in the callback of the .then() 
promiseThree.then(function (user) {
    // here user will receive the passed obj/data
    console.log(user);
})


// 4th promise (creating)
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // suppose some error is there

        // Now, based on error checking, it will either resolve or reject
        /*
            Practical case: Suppose we did a web/network request, or tried to access some file
            and based on the success or failure of the operation, we've to return something
        */
        if (!error) {
            // if no error is there, i.e. the operation is success, then resolve and return the
            // accessed data from the file or database (say the given obj)
            resolve({ username: "hitesh", password: "12" })
        } else {
            // if there is some error, then use reject() to give error
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// consuming the above promise

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })

// console.log(username)

/*
    The method above to extract the property out of a returned object is wrong, 
    b/z the promise is in pending state 

    The correct syntax to do the same is chaining, i.e. multiple .then() and .catch() => catch() is connected with 
    reject just like then() is connected with resolve
*/

// Chaining (used in DB connection)
// .then() receives a user object
promiseFour.then((user) => { // this executes when resolve() is called in the promise callback
    console.log(user);
    return user.username; // this will return to the next .then()

}).then((username) => {
    console.log(username);

}).catch(function (error) { // this executes when reject() is called in the promise callback
    // the error is returned in the .catch() just llke the value is returned in the .then()
    console.log(error)

}).finally(() => {
    /*
        This tells us whether the promise is resolved or rejected in the end
        This is a default statement, it'll surely execute
    */
    console.log("The promise is either resolved or rejected")
})



// 5th promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


// Using async and await instead of .then() , .catch() to consume the promise
// They are pretty much similar to .then() and .catch(), they just wait for the async task
// to finish, if it finishes, then only it proceeds, else it gives us error then and there.

/* 
    Here, catch may not be handled that efficiently, but sometimes in DB connection,
    when the db didn't connect, then we don't wish to proceed, such cases may find use of
    async and await.
*/

async function consumePromiseFive() {
    /*
        once the async keyword is used before the func, then await keyword can be use inside the scope
        this means we're waiting for the response that'll come from the specified promise (promiseFive),
        but here it always expects the promise to resolve and return some value,  
        but if it rejects, i.e. the promise or some Network request gives error, then async, await can't
        handle the error directly
    */

    // So, to handle the error/reject use try-catch block
    try {
        const response = await promiseFive
        console.log(response); // reponse will reeive the resolve() value
    } catch (error) {
        console.log(error) // error will receive the reject() value 
    }
}

consumePromiseFive()


// // async implies that some response will come in this function
// async function getAllUsers() {
//     try {
//         // we'll fetch all users from a given url and bring them here

//         // fetch(arg: url) is a network url, so takes time, so await keyword needed
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // const data = response.json() // gives status: pending b/z the conversion of response to json also takes time
//                                         // is asynchronous, so we've to put an await there as well

//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()



// Above code using .then() and .catch()

// return type of fetch() : Promise() object
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() // this will be handled by the next .then() (chaining)
})
.then((data) => { // works only after the above .then() has completed
    console.log(data)
})
.catch((error) => console.log(error)) // handles the error


/*
    Fetch() internal working explained: https://youtu.be/Rive84an6Lc?si=J92WQp6R6tADZrot (main working from 10th minute onwards)
    Still, a short 18 minute video, if needed, quickly revise it before interview (either use excali draw or pen-paper then for quick notes)
*/