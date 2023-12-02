//Arrays
// const Arr = [1,2,3,5,4,"Rakesh"]
//JavaScript Arrays are resizable and contain different datatypes

//Accessing Array //0-based Indexing
// console.log(Arr[0]);

//Shallow Copy - same reference Point
//Deep Copy - Don't share same references

const myArr = new Array("one",2,3,4)
// console.log(myArr[0]);


// //Arrays Methods
// myArr.push(6) //Insert new value to the last.

// myArr.pop() //remove the laast element

// myArr.unshift(9) //Add element at the start.

// myArr.shift() //remove the first one..

// console.log(myArr.includes(1)); //check availability of the element

// console.log(myArr.indexOf(2)); //return index(0-based)

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr); //return same value without bracket
// console.log(typeof newArr); //return string

console.log(myArr.slice(0,3)); //Returns a copy of a section of an array.
console.log(myArr.splice(0,3)); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(myArr);
