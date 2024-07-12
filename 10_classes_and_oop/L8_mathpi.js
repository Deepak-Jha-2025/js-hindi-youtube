// We have direct access to built-in Object

// Tells about some hidden things about the Object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // tells about the value of the keyProp: "PI" of the Math object


// console.log(Math.PI) 
// Math.PI = 5 // can't change the pi constant, why?
// console.log(Math.PI) 

// console.log(descripter);
/*
    descripter = {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,       
        configurable: false      
    }

    All these properties are implementation of core Js engine inside browser/node env
    we can't just make those values true so easily ()

    These are like some hard-coded flags/descripter properties set with the object, which make it difficut to 
    overwrite, even we define such values for out objects, s.t it can't be changed/overwritten
*/

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('chai nhi bni')
    }
}

// Now even properties of our customly made objects can have property descripters
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// We can't set/edit those descriptor properties for all objects
// For our made obj, we can

Object.defineProperty(chai, 'name', {
    // Editing existing property
    writable: false,  // Now, this property can't be overwritten
    enumerable: false // Now, this property is not iterable
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // This check avoids printing function as a key-value pair

        console.log(`${key} : ${value}`);
    }
}