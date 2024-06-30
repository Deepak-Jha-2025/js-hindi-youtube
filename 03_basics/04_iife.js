// Immediately Invoked Function Expressions

// Some functions need to be executed immediately after writing them

/* Sometimes, we'll write a file having only database connections and we want 
that as soon as our application starts, those connections inside the file should start.

Also, sometimes variables written inside some function scope get polluted by the 
global scope, we don't want that as well. So, to remove that pollution, we use IIFE */


// Normal syntax

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()


// IIFE Syntax
(function chai() {
    // named IIFE, this has a name - chai
    console.log(`DB CONNECTED`);
})();

// ()(); --> 1st paranthesis: enclose the func definition to be executed here; 2nd parenthesis is given for its execution call 
// and a semi-colon at the end is needed b/z IIFE get invoked but don't know where to end the context, so to end 
// it we put a ; explicitly at last, else the upcoming IIFE after that will not get executed and error will occur.

// Without arguments

// ( () => {
//     console.log(`DB CONNECTED TWO`)
// } )()


// With arguments

( (name) => {
    // This IIFE has no name
    console.log(`DB CONNECTED TWO ${name}`)
} )('hitesh')

/*
    The above IIFE is same as:
    const chai = (name) => {
        console.log(`DB CONNECTED TWO ${name}`)
    }
    
    chai('hitesh')
*/


// For Execution Context: https://excalidraw.com/#json=tCU82PCsd4PuR--3UmOD-,0Q7-vaX0Ch2Gf-Qt-Ryvqw










