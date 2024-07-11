// let myName = "Hitesh     "
// let myChannel = "ChaiaurCode     "

// console.log(myName.trim().length); // we don't want to do this everytime with every new string

/*
    We just want to create a new property/method truelength
    that comes by default with every new string created
*/
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    // key-value(string) pairs
    thor: "hammer",
    spiderman: "sling",

    // we can also inject a function as a value
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }

}


/* 
   we wish to inject a function hitesh() from our side
   such that whenever we declare any object, then the base
   should be declared in that object itself

   It's like suppose if we put some new function in Object,
   then String, Array and function which are also Objects, as
   they inherit from Object, should also automatically have that
   function by default now, without having to add in them manually
*/


Object.prototype.hitesh = function () { // this makes it accessible to any Object (Object, Array, String, function) declared from now on
    console.log(`Hitesh is present in all objects`)
}


// heroPower.hitesh() // any Object declared now will already have the hitesh() function by default in their prototype

// myHeros.hitesh() // any Array declared from now will also have hitesh() in their prototype


/*
    So, we basically accessed the top lvl hierarchy in the inheritance (i.e. Object)
    and added a property/method there, and now the lower lvl hierarchy have it as well

    The vice versa is not true, low lvl changes will not be accessible in higher lvl
*/


// Now, what if we made changes in the prototype at some low level in the hierarchy? 
// Will the upper levels or the top level have it as well now in their prorotype?

Array.prototype.heyHitesh = function () {
    console.log('Hitesh says hello')
}

myHeros.heyHitesh() // myHeros will surely have access as it is an Array

// heroPower.heyHitesh() // however, Object (higher lvl heirarchy) will not have access to some func added in lower lvl heirarchy




// Inheritance
/*
    Every object is a different instance on its own
    None of them are sharing any properties/methods

    Default properties of the prototype of built-in Object are possessed by every object like .length

    It's just that those properties/methods which are explicitly added by us to any particular object are
    not available to any other object, these prop/methods aren't shared until we 'inherit' them
*/

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    // In case we want to exchange info b/w any 2 objects, so to link them:
    __proto__: teachingSupport // now borrows everything from the prototype of the specified obj (teachingSupport)
}


// Can be done outside the object or inside the object
Teacher.__proto__ = User // now Teacher obj has access to all prop/methods (entire prototype) of User

// This is prototypal inheritance, how one object accesses the properties of some other object

// __proto__ ==> old syntax (outdated)

// modern syntax
Object.setPrototypeOf(teachingSupport, Teacher) // now teachingSupport has all properties of Teacher object


// Now addressing the problem at the 1st line of this file
let anotherUsername = "ChaiaurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()







