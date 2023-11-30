//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log( typeof myDate);

let customDate = new Date(2050,3,8)
// let customDate1 = new Date(2050,3,8,22,30)
// let customDate2 = new Date("2023-02-28")
// let customDate3 = new Date("05-24-2023")
// console.log(customDate.toDateString());
// console.log(customDate1.toLocaleString());
// console.log(customDate2.toLocaleString());
// console.log(customDate3.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// //Comparing Different Dates 
// console.log(customDate.getTime() < myTimeStamp);

//in Seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMonth() +1);

newDate.toLocaleString('default',{
    weekday:"long",
    
})