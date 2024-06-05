
let arr = ['Superman', 'Batman', 'Wolverine', 'Spiderman', 'Deadpool'];

// ------------------------------------

// 1. Accessing Element in Array
// console.log(arr[2]);

// ------------------------------------

// 2. Accessing First Element in Array
// let firstEl = arr[0];
// console.log(`First Element of the array is ${firstEl}`);

// ------------------------------------

// 3. Accesaing Last Element in Array
// let lastEl = arr[arr.length - 1];
// console.log(`Last Element of the array is ${lastEl}`);

// ------------------------------------

// 4. Modifying the Array Elements
// console.log(arr);
// arr[2] = "Captain America";
// console.log(arr);

// ------------------------------------

// 5. Adding Elements to the Array

// push() -> Adding element to the end
arr.push('Thanos');
console.log(arr);

// unshift() -> Adding element to the start
arr.unshift('Hulk');
console.log(arr);

// ------------------------------------

// 6. Removing Elements of an Array

// pop() -> removes and returns the last element
console.log(arr.pop());//Deadpool removed
console.log(arr);

// shift() -> removes and returns the first element
console.log(arr.shift());//Superman removed
console.log(arr);

// splice() -> removes 2 elements starting from index (startingIndex,endingIndex)
// console.log(arr.splice(1, 2));
// console.log(arr);

// ------------------------------------

// 7. Array Length
// console.log(arr.length);

// ------------------------------------

// 8. Increase and Decrease in the array length

//increased length
// console.log(arr.length);
// arr.length = 6;
// console.log(arr.length);

//decreased length
// console.log(arr.length);
// arr.length = 4;
// console.log(arr.length);

// ------------------------------------

// 9. Iterating through array elements

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ------------------------------------

// 10. Array Concatination

// let arr2 = ['Hulk', 'Antman'];
// let concatArr = arr.concat(arr2)
// console.log(concatArr);

// ------------------------------------

// 11. Conversion of an Array to string

// console.log(arr.toString());

// ------------------------------------
// 12. Check the Type of an Array

// console.log(typeof arr); //object