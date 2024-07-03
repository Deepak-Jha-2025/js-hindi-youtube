
// reduce() in arrays (mostly used to calculate the cummulative or sum)


const myNums = [1, 2, 3]

// Using function keyword
// const myTotal = myNums.reduce(function (acc, currVal) {
    //     console.log(`acc: ${acc} and currVal: ${currVal}`);
    //     return acc + currVal // this will keep on adding until it returns the entire sum of the array
    
    // }, 0) // This 0 is the initial value that the accumulat (acc) starts with
    
    
// Using arrow function
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0) // 0 = initialValue for the accumulator (refer MDN docs)
// console.log(myTotal);

    
/* This is particularly useful when we're dealing with large shopping carts,
    so while calculating the final bill of the cart, this will be used. */
const shoppingCart = [
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    }, 
    {
        itemName: "mobile dev course", 
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

// Desired functionality: Add all the prices of the above shopping cart
const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalBill);