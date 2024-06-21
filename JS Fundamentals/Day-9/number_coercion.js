// 1. Undefined to NaN

const result = undefined + 10;
console.log(result);

// 2. Null to 0

const total = null + 5;
console.log(total);

// 3. Boolean to Number 

const num1 = true + 10;
const num2 = false + 10;
console.log(num1, num2);

// 4. String to Number 

const str1 = '42';
const str2 = 'hello';
const numforstr1 = Number(str1);
const numforstr2 = Number(str2);
console.log(numforstr1, numforstr2);

// 5. BinInts and Symbols 
const symbolValue = Symbol('mySymbol');
// const numFromSymbol = Number(symbolValue); // TypeError
// console.log(numFromSymbol);

// ----------------------------------------------------------
// JavaScript Numbers Methods

let x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));