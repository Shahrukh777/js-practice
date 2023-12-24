
// FUNCTIONS

function fc(n1, n2){
    const n3 = n1 + n2;
    return n3
}
console.log(fc(10,12))

function login(username){
    if(username === undefined){
        console.log("Please enter a name.");
        return
    }
    return `${username} just logged in.`
}
console.log(login("shahrukh"))