// Immediately Invoked Function Expression (IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();
// console.log('hello');
// (function chai2(){
//     console.log(`DB CONNECTED`);
// })();
// console.log('hello');
// (function chai3(){
//     console.log(`DB CONNECTED`);
// })();





// // you can also try it with arow function
// (() => {
//     console.log(`DB DISCONNECTED`);
// })();

((name) => {
    console.log(`DB CONNECTED for ${name}`);
})("Rakesh");