// ARRAY

// multiple datatypes, resizable, not associative(only indexing)
// shallow copy: properties share the same reference. changes will reflect in original array.

const arr1 = [1,2,3,4, true, "Shahrukh", "S"]
console.log(arr1[4]);

// METHODS

arr1.push("RUSH")
arr1.push("HOUR")
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift('SHAH') // time consuming
console.log(arr1);
arr1.shift()
console.log(arr1);
console.log();

console.log(arr1.includes("SHAH"));
console.log(arr1.indexOf(true));
console.log();

const arr2 = arr1.join()  // also converts it into string
console.log(arr2)
console.log(typeof arr2)
console.log();

const arr3 = arr1.slice(1, 5); //subarray containing elememts from original array....no change in original array
console.log(arr3);

const arr4 = arr1.splice(1,5) //subarray cut paste from elements of the original array
console.log(arr4);

console.log("Original array: " + arr1)