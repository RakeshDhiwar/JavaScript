//Functions

//Creating function
// function sayName (){
//     console.log("Rakesh");
//     console.log();
// }

// function reference
// sayName

//function calling.
// sayName()
// sayName()
// sayName()

// function addNums(num1,num2){
//     console.log(num1+num2);
// }
// addNums(3,null)

//here num1 and num2 are parameter.
//And 3 and null are arguments.

// const result = addNums(3,5)
// console.log("Result:",result); //undefined, not returning the result...

function addNums1(num1,num2){
    console.log("rk");
    return num1+num2
    console.log("rk"); //Unreachable code, function can't do anything after return statement...
}
// addNums1()
// const result1 = addNums1(3,5)
// console.log("result1",result1);

// function loginUserMessage(name){
//     return `${name} just logged in...`
// }
// loginUserMessage("rk") //print nothing
// console.log(loginUserMessage("rk"));
// console.log(loginUserMessage()); //undefined


function loginUserMessage(username = "rk") {
    if(username === undefined){
        console.log("Please enter your name");
        return
    } 
    return `${username} just logged in...`
} 
console.log(loginUserMessage());
