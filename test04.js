//Numbers & MATH

const score = 50
const goal = new Number(100.69)

console.log(score.toString())
console.log(goal.toString())
console.log(goal.toFixed())
console.log(goal.toPrecision(4))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-UK'));
console.log(hundreds.toLocaleString('en-IN'));
console.log('MATHS...')
console.log();
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.floor(9.25));
console.log(Math.ceil(9.75));
console.log(Math.round(9.66));
console.log(Math.min(4,8,5,7,9,6,2));
console.log("DICE ROLL...");
console.log(Math.ceil(Math.random()*6))
console.log("RANGE");

const min = 10
const max = 12
console.log(Math.floor(Math.random() * (max - min + 1) + min))