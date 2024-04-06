// console.log(2 < 3)
// console.log(2 >= 1)
// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 != 1)

// Always avoid such type of conversions given below (clean code = top priority)

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0);  // false 
// console.log(null == 0); // false 
// console.log(null >= 0)  // true =>  

/* The reason is that an equality check == and comparison
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === -> strict check (checks both val & datatype)
console.log("2" == 2)  // true  => b/z here conversion takes place
console.log("2" === 2) // false => b/z datatype not same (no conversion)