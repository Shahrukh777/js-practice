
// ARRAY -----

let myArr = [0,1,2,true,"Shahrukh",'s']
console.log(myArr[4])

const myArr2 = new Array(1,2,4,5,6)
console.log(myArr2[2])

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)   // new element in the 1st position
myArr.shift()      // remove new element
myArr.sort()

console.log(myArr)

let myArr3 = [1,2,3,4,5]
console.log(myArr3.includes(9))
console.log(myArr3.indexOf(3))

const newArr = myArr3.join()    // adds all elements of an array into a string
console.log(newArr)
console.log(typeof newArr)

// slice splice
let arr = [1,2,3,4,5,6]
console.log("MAIN ARRAY -", )
const arr1 = arr.slice(1, 4)    // creates a subset of an existing array
console.log(arr1)
const arr2 = arr.splice(3,5)    // removes the elements from original array & assign it to new array  --  inclusive  --
console.log(arr2)
console.log("MAIN ARRAY -", arr)