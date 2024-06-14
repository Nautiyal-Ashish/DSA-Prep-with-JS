// 1. Finding the length of a string

let string = 'PROGRAM';
console.log('Length of the string is :', string.length);

// 2. String Concatenation 

let str1 = "Ashish";
let str2 = " Nautiyal";
console.log(str1 + str2);

// 3. Escape Characters 

let singleEscapeChar = "'Hello\'";
let doubleEscapeChar = '"Hello\"';
let backslashEscapeChar = "\\Hello\\";
console.log(singleEscapeChar, doubleEscapeChar, backslashEscapeChar);

// 4. Breaking Long Strings 

const breakStr = "My name is \
Ashish Nautiyal";
console.log(breakStr);

// 5. Find Substring of a String

let str3 = 'Finding a SubString of a String';
let substr = str3.substring(0, 20);
console.log(substr);

// 6. Convert String to Uppercase and Lowercase

let str4 = 'Ashish Nautiyal';
let upperCaseStr = str4.toUpperCase();
let lowerCaseStr = str4.toLowerCase();
console.log(`String Converted to Uppercase : ${upperCaseStr}`,);
console.log(`String Converted to Lowercase : ${lowerCaseStr}`);

// 7. String Search in JavaScript 

let str5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(str5.indexOf('K'));

// 8. Srring Replace in JavaScript

let str6 = 'Hello Buddy , How are You ?';
console.log(str6.replace('Buddy', 'Ashish'));

// 9. Trimming whitespaces from String 

let str7 = '           Javascript';
console.log(str7.trim());

// 10. Access Characters from String

let str8 = 'Learn JavaScript'
console.log(str8[6]);
console.log(str8.charAt(6));

// 11. String Comparison in JavaScript 

let str9 = 'ashish'; //string
let str10 = new String('ashsih'); //object
console.log(str9 == str10);
