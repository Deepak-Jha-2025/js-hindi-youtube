// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number")
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + ' x ' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// keywords
/* It is not necessary to always print the entire array. And in many practical cases, 
   when values come from the database, such as data of 1000 books, then we don't need
   to show all the books on a single page, we may do it page wise, some 5-10 books per
   page or so */

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`)
//         break // breaks the contorl flow of the loop
//     }
//     console.log(`Value of i is ${index}`)
// }
    

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`) 
}
