const user = {
    username: "rakesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

user.welcomeMessage()
// console.log(this);

// function chai() {
//     let user = "rk"
//     console.log(this.user); // not working // undefined
// }
// chai()

// const chai = function () {
//     let username = "rakesh"
//     console.log(this);
// }
// chai() // undefined

// const chai =  () => {
//     let username = "rakesh"
//     console.log(this);
// }
// chai()

//Arrow function
// const aadtwo = (num1, num2) => {
//     return num1 + num2
// }

// const aadtwo = (num1, num2) => num1 + num2

// const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2) => ({username:"rakesh"})
