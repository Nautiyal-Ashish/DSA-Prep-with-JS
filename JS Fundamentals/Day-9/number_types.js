// 1. The Only Numeric Type

let onlyNumeric = 1;
console.log(`OnlyNumeric : ${onlyNumeric}`);

// 2. Scientific Notation 

let num1 = 156e5;
let num2 = 156e-5;
console.log(`num1 : ${num1}`);
console.log(`num2 : ${num2}`);

// 3. Integer Precision

let num3 = 9999999999999;
let num4 = 99999999999999999;
console.log(`num3 : ${num3}`);
console.log(`num4 : ${num4}`);

// 4. Floating Point Precision

let num5 = 0.22 + 0.12;
let num6 = (0.22 * 10 + 0.12 * 10) / 10;
console.log(`num5 : ${num5}`);
console.log(`num6 : ${num6}`);

// 5. Adding Numbers and Strings 

let num7 = 10;
let num8 = 15;
let num9 = "10";
let num10 = "15";

console.log(`Adding two numbers : ${num7 + num8}`);
console.log(`Concatinating two Strings :${num9 + num10}`);

// 6. Numeric Strings 

let num11 = "100" / "10";
let num12 = "100" * "10";
let num13 = "100" - "10";

console.log(`num11 : ${num11},num12 : ${num12},num13 : ${num13}`);
