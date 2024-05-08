// FUNCTIONS

// function add(n, m){
//     // let x = n + m
//     // return x
//     return n + m
// }
// let res = add(4,6)
// console.log(res)

// FUNCTIONS IN OBJECTS

function maths(n1, n2, ...num1){    // ... FOR UNKNOWN NUMBER OF ARGUMENTS -- RETURNS ARRAY -- 
    return num1                     // n1 & n2 will be 2,2 resp. rest will be in array [num1]
}
console.log(maths(2,2,4,5,9,6))

//object

const user = {
    name: "Shahrukh",
    age: 21
}

function detail(obj){
    console.log(`Your name is ${obj.name} & your age is ${obj.age} years old.`)  // HANDLING OBJECTS IN FUCNTIONS
}
detail(user)         // REMEMBER TO PASS THE OBJECT IN FUNCTION CALL
// detail({
//     OBJECT...
// })


// SCOPE  {}
var b = 1100         // DONT USE VAR (var)
let a = 1100
if(true){
    let a = 10
    var b = 20
    const c = 30
    console.log(a)
}
console.log(a)     
// console.log(c)
console.log(b)

// THIS KEYWORD

const shah = {
    name: "Shahrukh",
    greeting: function(){
        console.log(`Hello ${this.name}, welcome to js.`)
    }
}
shah.greeting()

// ARROW FUNCTION     -- SYNTAX:  () => {}
// const ss = () => {
//     let username = "SHAHRUKH"
// }
const sub = (num1, num2) => {
    return num1 - num2
}
console.log(sub(6, 2))

// IMPLICIT RETURN

const multi = (n1, n2) => (n1 * n2)
console.log(multi(5, 6))

// arraow function -- with objects

const aa = () => ({username: "shahRUKHSHEikh"})
console.log(aa().username)

