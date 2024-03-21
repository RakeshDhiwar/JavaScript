//   OBJECT LITERAL
// const user = {
//     username: "rakesh",
//     loginCnt: 5,
//     sinedIn: true,

//     getUserDetail: function () {
//         console.log("Got user detail from DB");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.loginCnt);
// console.log(user.getUserDetail());

// console.log(this);  // empty object  // you get window object in browser.




//   CONSTRUCTOR FUNCTION

// const promise1 = new Promise()
// const date = new Date()
// new keyword here is a Constuctor function

function User (username, logiCnt, isLoggedIn) {
    this.username = username  //this.username is variable and other is passed value in function
    this.logiCnt = logiCnt
    this.isLoggedIn = isLoggedIn

    // return this 
}

const userOne = new  User('Raks',6,true)
const userTwo = new  User('chai',3,false) //owerWrite the above user one use new keyword
console.log(userOne);
console.log(userTwo);
