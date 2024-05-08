// OBJECTS
// singleton - constructor xxx

// object literals
const user = {
    name:"Shahrukh",
    "full name": "Shahrukh Sheikh",
    age: 21,
    college: "Bhavans",
    days: ["sunday","thursday"]
}
console.log(user.name)
console.log(user["full name"])

// symbol
const mySym = Symbol("key1")

const user1 = {
    nn: 0,
    [mySym]: "myKey01"
}
console.log(user1[mySym])
user1.nn = "SHAHRUKH";
console.log(user1.nn)

Object.freeze(user)      // FREEZES THE OBJECT -- no changes can be made
user.name = "Shah"
console.log(user)

user1.greeting = function(){
    console.log("Hello Shahrukh.")
}

user1.greeting1 = function(){
    console.log(`Hello user, ${this.nn}`)
}

console.log(user1.greeting())
console.log(user1.greeting1())