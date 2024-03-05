
let a = 500
if(true) {
    let a = 10
    const b = 20 
    var c = 30
    // console.log("inner:",a);
}
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(c);

//nested Scope
function one(){
    const username = "Rakesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()