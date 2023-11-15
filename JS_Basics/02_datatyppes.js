"use strict"; //  treat all JS code as newer version

// alert("hello")  // we are using nodeJs , not browser 

console.log(3 +
    3) // code readability should be high

console.log("RAkesh")

//Datatypes

let name = "Rakesh" // String
let age = 20  // number
let isloggedIn = false


//number => 2 to power 53
//bigint
//String ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol    (used for uniqueness)

//object 

console.log(typeof "")
console.log(typeof isloggedIn)
console.log(typeof null)   //oject
console.log(typeof undefined)  //undefined

/*
The reason typeof null returns "object" in JavaScript is actually a historical quirk. It's considered a bug in the language specification.

When JavaScript was first created, null was intended to represent an empty object reference. So at the time, it made sense for typeof null to return "object".

However, over time null has taken on a different meaning - to represent the intentional absence of a value. It is now considered a primitive type in JavaScript, distinct from objects.

But for backwards compatibility, the typeof null returning "object" behavior was never changed in the language specification.

So in summary, while null is actually a primitive type in JavaScript, typeof null returns "object" for historical reasons. This is considered a bug in the specification, but it was not changed to avoid breaking existing code.

The correct types for the primitive values in JavaScript are:

typeof undefined // "undefined"
typeof null // "object" (should actually be "null")
typeof true // "boolean"
typeof 42 // "number"
typeof "foo" // "string"
typeof Symbol() // "symbol"

*/