// Function definition
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}


// sayMyName   // function reference
// sayMyName() // function execution

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  
    // let result = number1 + number2
    // return result

  return number1 + number2
}

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);


function loginUserMessage(username = "sam") { // using default args
  // if(username === undefined) {
  if(!username) {
    console.log("Please enter a username")
    return 
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // Gives undefined unless if condtional is introduced in the function


// An example is shopping cart (it's not fixed how many items will be added and how many prices will be added, i.e. no. of args is not fixed)

// In this case, the spread operator (...) is said as rest operator
// Using rest operator, multiple values can be passed into a func

// // Case 1
// function calculateCartPrice(...num1) {
//   return num1
// }

// Case 2
function calculateCartPrice(val1, val2, ...num1) { // 1st 2 values will passed to val1 and val2, remaining will be passed into the array
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 1000)) // no. of values passed is not fixed (will vary as per user)


const user = {
  username: "hitesh",
  prices: 199
}

// how to pass object into a function

// In such methods handling objects, type safety check is necessary, whether the specified property is available in the object or not
// and whether the datatype of the passed value is 'Object' or not.
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// obj can also be directly passed
handleObject({
  username: "sam",
  price: 399
})



// how to pass array into a function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));