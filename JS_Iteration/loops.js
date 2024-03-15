//LOOPS

//FOR
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num);
// }

// const greeting = "Welcome to my world"
// for(const greet of greeting){
//     if (greet == " ") {
//         continue
//     }
//     console.log(greet);

// }

// Maps
// Unique values

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(`${key}:-${value}`);
}

const myObj = {  //object is not Iteratable
    "game1": "Dr. Driving",
    "game2": "BGMI"
}
for (const [key,value] of myObj) {
    console.log(`${value}`);
}