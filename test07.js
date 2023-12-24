// ARRAY FUNCTION

const Inazuma = ["Kazuha", "Ayaka", "Raiden", "Yoimiya"]
const Liyue = ["Yanfei", "Xiangling", "Zongli", "Xaio"]

//Inazuma.push(Liyue)
//console.log(Inazuma[4][3])

//Inazuma.concat(Liyue)  ---- Returns New Array
console.log(Inazuma);
console.log();


// for(let i=0; i<Liyue.length; i++){
//     Inazuma.push(Liyue[i])
// }
// console.log(Inazuma);

const arr2 = [...Inazuma, ...Liyue]  //  ----- SPREAD-----
console.log(arr2)

const arr3 = [1, 2, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr3Real = arr3.flat(100)  // ----- PARAMETER DEFINES DEPATH -----
console.log(arr3Real)

console.log(Array.isArray("Shahrukh"))
console.log(Array.from("Shahrukh"))
console.log(Array.isArray(Array.from("Shahrukh")))

console.log(Array.from({name: "Aminal"}))  //gives EMPTY ARRAY    --specify key--

let a = 10, b = 20, c = 30;
console.log(Array.of(a,b,c))