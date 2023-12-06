//Singleton
// Object.create

//Object literals

const mySym = Symbol()

const JsUser  = {
    name:"Rakesh",
    "fullName":"RK Dhiwar", //youo cant accesses this using dot operator, you can do this by square Bracket...
    age: 3,
    location: "Raipur",
    email: "rk@microsoft.com",
    isloggedIn:true,
    logInDays : {
        Mon:true,
        Tue:true,
        wed:false,
        thur:true,
        fri:true,
    },
    //using symbol in object
    [mySym]:"Symbol_1"
}

// Accessing Objects
// console.log(JsUser.logInDays.Mon);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);

//Changing the values
// JsUser.age = 2

// //Freezing the values
// Object.freeze(JsUser)

// JsUser.age = 22
// console.log(JsUser);

JsUser.greet = function(){
    console.log("hello js");
}

JsUser.greet2 = function(){
    console.log(`hello js user, ${this.fullName}`);
}
 console.log(JsUser.greet());
 console.log(JsUser.greet2());