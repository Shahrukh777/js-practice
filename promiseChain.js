
// Promise chain *** ONE AFTER ANOTHER  *** nested then

function asyncFunction1(){
    return new Promise((reoslve, reject) => {
        setTimeout(() => {
            console.log("- Some Data -");
            reoslve("Success!");
        }, 2000);
    });
}

function asyncFunction2(){
    return new Promise((reoslve, reject) => {
        setTimeout(() => {
            console.log("- Some Data -");
            reoslve("Success!");
        }, 2000);
    });
}

console.log("Fetching data 1... ")

asyncFunction1().then(() => {
    console.log("Fetching  date 2... ")
    asyncFunction2().then(() => {})
})

