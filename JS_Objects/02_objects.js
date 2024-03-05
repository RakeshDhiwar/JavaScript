const User = new Object() //Singleton Object 
const User1 = {} //Non-Singleton Object

User.id = "43"
User.name = "Sam"
User.isLoggedIn = false
const regularUser = {
    name:"RDX",
    age:2 ,
}
User.regUser = regularUser
// console.log(User);

// object nesting
// log(regularUser.fullname.userfullname.firstname)
//    
// Optional Chaining
// log(regularUser.fullname?.userfullname.firstname)



const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// Combining objects using Object.assign
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj1);

//Combining through spread operator
// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email:"r@mail.com"
    },
    {
        id:2,
        email:"r2@mail.com"
    },
    {
        id:3,
        email:"r3@mail.com"
    },
    {
        id:4,
        email:"r4@mail.com"
    },
]
// console.log(users[3].email);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

console.log(User.hasOwnProperty('regUser'));