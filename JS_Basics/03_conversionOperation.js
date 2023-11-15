let score = "33"
let score1  = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

let valueInNumber1 = Number(score1)
console.log(valueInNumber1); //NaN type (Not a Number)
console.log(typeof valueInNumber1);  

/*
converting undefined, any string name in number returns NaN and in case of null it return 0, and in boolean values true-1 & false-0

"33" => 33
"33abs" => NaN
true => 1; false => 0;
"Rakesh" => number
*/

let num = 43
let stringNum = String(num)
console.log(stringNum);
console.log(typeof stringNum);