//  DATES

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let newDate = new Date(2002, 5, 23, 14, 56, 24, 81)
console.log(newDate.toString());
console.log(newDate.toISOString());

let letDate = new Date("06-23-2002")
console.log(letDate.toString());
console.log();

let timeStamp = Date.now()
console.log(timeStamp.toString());
// timeStamp from object
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myDate.getMonth());

console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}))