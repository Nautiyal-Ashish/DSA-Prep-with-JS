// -------------DataTypes--------------

// 1. -------Primitive Data Types ---------------

// 1. Number

const a = 123; // Only Numeric Type
console.log(typeof a);
const b = 156e5; // Scientific Notation
console.log(typeof b);
const c = 999999999999999; // Integer Precision
console.log(typeof c);
const d = 0.22 + 0.12; // Floating Point Integer
console.log(typeof d);
const e = "1" + 2; // Adding Numbers and Strings
console.log(typeof e);
const f = "100" / "10"; // Numeric Strings
console.log(typeof f);

console.table([a, b, c, d, e, f]);

// 2. String

let str = "dav";
console.log(str);

// 3. Boolean

const bool1 = 2 > 3;
console.log(bool1);
const bool2 = 2 < 3;
console.log(bool2);

// 4. Null

const val = null;
console.log(val);

// 5. Undefined
var val2;
console.log(val2);

// 6. Symbols

let symbol1 = Symbol("A");
let symbol2 = Symbol("A");
let allSymbol = symbol1 == symbol2;
console.log(allSymbol); // false
console.log(typeof symbol1);
console.log(typeof symbol2);

// 7. BigInt

let big = BigInt(221121212121212121212121212121212121212112);
console.log(big);
console.log(typeof big);
