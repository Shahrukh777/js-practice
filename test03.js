let name = "Shahrukh"
let age = 21

console.log(`My name is ${name}. I am ${age} years old.`);

let game = new String('SHAH-RUKH')

console.log(game);
console.log(game.__proto__);
console.log(game.charAt(4));
console.log(game.lastIndexOf('K'));
console.log(game.substring(1, 4));

let game1 = game.slice(2, 5);
console.log(game1)

const x = "   Shahrukh   "
console.log(x);
console.log(x.split('h'));
console.log(x.trim());

const url = "https://google.com/shahrukh20%sheikh"
console.log(url.replace("20%", '-'))
console.log(url.split('/'));

