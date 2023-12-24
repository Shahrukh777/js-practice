// OBJECTS

//singleton   -- made with constructor. a single instance.  --

//objec literals
//or Object.create 

const mySym = Symbol("key1")  // SYMBAL

const js = {
    name: "Shahrukh",
    age: 21,
    420: 69,
    [mySym]: "myKey1", //To use Symble in Object
    location: "mumbai",
    "full name": "Shahrukh Sheikh",
    email: "shahrukh@google.com",
    isLive: false,
    loginDays: ["Monday", "Saturday"]
}
console.log(js.email)    // BAD PRACTICE
console.log(js["full name"]); 
console.log(js["email"]) // GOOD PRACTICE
console.log(js[420])

console.log(js[mySym] +" " + typeof(js[mySym]));

js.age = 22;
// Object.freeze(js)   // ---  Cannot modyfy Object properties  ---
js.age = 23;        // -- changes will not reflect in the Object. no errors. --
console.log(js);

js.greeting = function(){
    console.log(`Hello User, ${this.name}...`);
}
console.log(js.greeting())
