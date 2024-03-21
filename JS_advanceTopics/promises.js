//promise 1
// const promise1 = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography, network releted
//     setTimeout(function(){
//         console.log('Async task is complete');
//     }, 1000)
// })
// promise1.then(function(){
//     console.log("Promise consumed");
// })



//promise2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })



//Promise3
// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"rk@example"})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
// })





//Promise 4
// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"chai",email:"rk@example"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promise4.then((user) => {
//     console.log(user);
//     return user.username
// }).then( (username) =>{
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally( () => {
//     console.log("Promise or either resolve or rejected");
// })







//Promise 5
// const promise5 = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         let error = true
//         if (!error) {
//             resolve({username:"Rk",email:"rk@example"})
//         } else {
//             reject('ERROR: JS went wrong!')
//         }
//     },1000)
// })

// // Use async await rathar than .then or .catch
// async function consumePromise () {
//     try {
//         const response =  await promise5
//     console.log(response);      
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise()





// Application
// async function getallUser () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getallUser()

// getallUser using .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
}).then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})