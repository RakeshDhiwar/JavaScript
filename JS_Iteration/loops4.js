// reduce

// const mynums = [1, 2, 3]

// const newNum = mynums.reduce((acc,currval) => {
//     console.log(`acc:${acc} -- currVal:${currval}`);
//     return acc + currval
// },0)
// console.log(newNum);


const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },
    {
        itemName: 'Mobile dev Course',
        price: 5999
    },
    {
        itemName: 'py Course',
        price: 1999
    },
    {
        itemName: 'Data Science Course',
        price: 12999
    },
]

const totalprice = shoppingCart.reduce((acc,item)=>{
    return item.price + acc
},0)
console.log(totalprice);