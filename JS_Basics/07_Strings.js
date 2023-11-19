// const myname = "Rakesh"
// const count = 55

// //String ConcateNation
// console.log(myname + count);

// //String Interpolation
// console.log(`Hello my name is ${myname} and count is ${count}`);

// const gameName = new String('RDX')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('D'));

//other methods 

// .substring(,)
const str = "Sting"
const str1 = str.substring(-5,2) //dosent consider negative index
console.log(str1);

// .slice(,)
const str2 = str.slice(-2,4) //negative index works
console.log(str2);

// .trim() //works only on whitespaces
const Str3 = "  rakesh  "
console.log(Str3.trim());

//replace()
const url = "http://hitesh/H%20C"
console.log(url.replace('%20','-'));

console.log(url.includes('%'))