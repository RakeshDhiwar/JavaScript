//DATATYPES
//1.Primitive  2.Non-Primitive
//based on how data are stored and access.



// #PRIMITIVE
// Call by Value -- the argument (or parameter) is passed by creating a copy of it. Any changes made to the parameter do not reflect back to the original argument.
// 7types : String, Number, Boolean, null, Undefined, Symbol, BigInt.
// const score = 100  //number
// const scoreValue = 100.3
// const login = true  // boolean
// let useremail  //undefined

// const id = Symbol('145')  //Symbol
// const id2 = Symbol('145')
// console.log(id === id2);

// const bigNum = 8n  //bigInt
// console.log(typeof bigNum);

//-------------------------------//------------------------------- -------------

// #NON-PRIMITIVE(REFERENCE)
// Arrays, Objects, Functions

// const heros = ["shaktiMan", "Naagraj", "Doga", "Rakesh"];  //array
// let obj = {       //Object
//     name:"Rakesh", 
//     age:20,
// }
// const myFunc = function(){  //Function
//     console.log("Function");
// }

// const Func = () => {
//     console.log("arrow Function");
// }

// Func()

