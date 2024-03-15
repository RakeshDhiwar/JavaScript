const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log();
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key])
}


// programming.forEach(function (items) {
//     console.log(items);
// })
// programming.forEach(function (items, index, arr) {
//     console.log(items,index, arr);
// })

const mycoding = [
    {
        languageName: "javascript",
        filename:"js"
    },
    {
        languageName: "python",
        filename:"py"
    }
]

mycoding.forEach( (items) =>{
    console.log(items.filename);
})