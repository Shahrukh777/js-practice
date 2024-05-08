console.time("your code took")

// TYPE CONVERSION
console.log("TYPE CONVERSION")
let myVar = 34;
console.log(myVar, (typeof myVar));
let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));
let date = new Date();
console.log(date, (typeof date));
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr, (typeof arr));

//CONVERSION TO STRING
console.log("CONVERSION TO STRING")
let i = 8;
console.log(i.toString());
let abcd= new Date();
console.log(abcd.toString());

//CONVERSION TO NUMBER 
console.log("CONVERSION TO NUMBER")

let stri=Number("6545");
console.log(stri.toString(),(typeof stri));

//parsInt
console.log("parseInt")
let DD= parseInt('34.321');
console.log(DD, (typeof DD));

//parseFloat
console.log("parseFloat")
let CC= parseFloat('256.321');
console.log(CC, (typeof CC));

//.toFixed
console.log(".toFixed")
let number = parseFloat('656.6558');
console.log(number.toFixed(2), (typeof number));
// to show 'n' Number of decimals

//TYPE COERSION
console.log("TYPE COERSION")
let mystr=Number('50');
let mynum=100;
console.log(mystr + mynum)

console.timeEnd("your code took")