// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400 , 500 ));


const user = {
    name:"Rakesh",
    price:199
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}
// handleObject(user)

handleObject({
    name:"rk",
    price:239847
})

const newarray = [2,4,6,8]
function returnsecondValue(getArray){
    return getArray[2]
}
console.log(returnsecondValue(newarray));