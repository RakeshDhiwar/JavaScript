// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 != 1);
// No issue in comparing different datatypes.


//But on compaaring different datatypes
// console.log("2" > 1);
// console.log("02" > 1);
//This can't be predictable this string can be converted in number ,NaN etc.
//That's why TypeScript don't allow to compare differnt datatypes.

// console.log(null > 0); //false
// console.log(null == 0);//false
// console.log(null >= 0);//true

// console.log(undefined > 0);//false
// console.log(undefined == 0);//false
// console.log(undefined >= 0);//false


//The reason is that an equality check == and comparisons > < >= <= works diffrently.
//comparision convert null to a number, trearing it as 0, 
// That's why null >= 0 is true and null > 0 is false.

/*
The == operator in JavaScript will implicitly convert operands to the same type (number, string, boolean) before comparing them, while === performs a strict comparison without type coercion.

"5" == 5 // Returns true Because the string "5" is coerced to the number 5 before comparing

5 === "5" // Returns false Because === performs a strict comparison and does not coerce types

[] == 0 // Returns true Because the empty array is coerced to the number 0 before comparing

[] === 0 // Returns false Because === performs a strict comparison and does not coerce types

in most cases we avoid these type of code.
*/