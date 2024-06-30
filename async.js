
console.log("One");
console.log("Two");

// Asynchronous (time management)  *** PARALLAL PROCESSING

// function hello(){
//     console.log("Hello world")            // WORKS
// }
// setTimeout(hello, 3000)

setTimeout(()=>{
    console.log("Hello world")               // WORKS
}, 1000)

console.log("Three");        // WILL EXECUTE IN ASYNC
