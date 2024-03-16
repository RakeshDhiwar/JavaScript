const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = nums.filter((num)=> num > 4)      //filter out the items

// let newNum = MyNumbers.map((num)=> {return num > 4})   //map operates on each items
// console.log(newNum);

// const newNum = MyNumbers.map((num)=>{
//     return num +10
// })
// console.log(newNum);

const newNums = MyNumbers
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num>30)
                .map((num)=>num >50)
console.log(newNums);