
// CONCATINATION
console.time('Your code took')
console.log("CONCATINATION")
const name=" Shahrukh";
const greeting="Good Morning";
console.log(greeting + name);

let html = "Hello"

html = html.concat(' Sheikh', ' Shahrukh', ' Apple');
console.log(html)
console.log(html.length)
console.log(html.toLowerCase(), html.toUpperCase())

//TO SHOW THE LETTER BY ITS POSOTION IN MULTIPLE STRINGS
console.log(html[0])
//THIS SHOWS [H] AS ANSWER BECOUSE THE COUNT STARTS FROM 0,1,2,...

//TO SHOW THE POSITION OF WORD/LETTER IN MULTIPLE STRINGS
console.log(html.indexOf('Apple'));
console.log(html.lastIndexOf('e'));
console.log(html.charAt(10));
console.log(html.endsWith('Apple'));
console.log(html.endsWith('Shahrukh'));
console.log(html.includes('swardman'));
console.log(html.substring(2,5));
console.log(html.replace('Hello', 'Hii'));

console.log(html.slice(4));
console.log(html.split('e'));
console.log(html.split(' '));

console.timeEnd('Your code took')