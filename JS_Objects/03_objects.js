const course = {
    CourseName:"Js Tutorial",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.Instuctor  // Instead of writing this all the time you can you use this,

const {courseInstructor:Instructor} = course //de-Structuring Objects
console.log(Instructor);

//JSON
// {
//     "CourseName":"Js Tutorial",
//     "price":"999",
//     "courseInstructor":"Hitesh"
// }

[
    {},
    {},
    {}
]