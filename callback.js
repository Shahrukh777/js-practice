// CALLBACKS      ( Functions as arguments to another function )

// function sum(a, b){
//     console.log(a+b)
// }
// function calc(a, b, sumCallback){        // WORKS
//     sumCallback(a, b);
// }
// calc(5, 6, sum)


// CALLBACK HELL

// function getData(dataId, getnextData){
//     setTimeout(()=> {
//         console.log("Data: ", dataId);
//         if(getnextData){
//             getnextData();
//         }
//     }, 1000)
// }
// getData(1, () => {            // BAD CODE BUT WORKS
//     getData(2, () => {
//         getData(3);
//     })
// });  

// SOLUTION
// PROMISES  *** FOR EVENTUAL COMPLETION OF TASKS  *** OBJECTS

// let promise = nre Promise((resolve, reject) => {...})       ***  SYNTAX

// STATES: PENDING, FULFILLED, REJECTED.

// let promise = new Promise((resolve, reject) => {  // AS IT IS --> STATUS: PENDING
//     console.log("I am a Promise.");
//     // resolve(123);             // any message  ***   STATE: SULFILLED
//     reject("REJECTED DUE TO ERROR");   // STATE: REJECTED
// });

// general use

function getData(dataId, getnextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Date: ", dataId);
            resolve("Success");
            if(getnextData){
                getnextData();
            }
        }, 1000)
    })
}
let result = getData(1)
console.log(result)

setTimeout(() => {
    console.log(result)
}, 2000)

// use of promise
// .then() (for fulfill) & .catch() (for reject)

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Shahrukh Promise");
        resolve("Done!"); 
        // reject("Some ERROR !");
    });
}

let promise = getPromise();
promise.then((res) => {
    console.log("Promise complete ", res);   // ON RESOLVE
})

promise.catch((err) => {
    console.log("Promise incomplete ", err); // ON COMPLETE
})


