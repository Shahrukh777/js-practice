let x = 10
{
    console.log(x);
}
x = 20;
console.log(x);
console.log(2**3);

let abc = "mm20";
let n = Number(abc)
console.log(typeof n);
console.log(typeof abc);
console.log(abc)
console.log(n);

// Stack (Primitive ) & Heap (Non-Primitive)

let name = "shahrukh"
let name2 = name;
name2 = "sheikh"
console.log(name)
console.log(name2)

let user1 = {
    aa: "ss",
    bb: "hh"
}

let user2 = user1
user2.aa = "SS"

console.log(user1.aa);
console.log(user2.aa);