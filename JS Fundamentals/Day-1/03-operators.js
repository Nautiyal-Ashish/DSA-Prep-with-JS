// JavaScript Arithmetic Operator

// 1. Addition (+)
// let sum = 2 + 3;
// console.log(sum);

// let strSum = "Ashish" + " " + "Nautiyal";
// console.log(strSum);

// 2. Subtraction (-)

// let subtraction = 3 - 2;
// console.log(subtraction);

// 3. Multiplication (*)

// let multiplication = 6 * 6;
// console.log(multiplication);

// 4. Division (/)
// let div = 25 / 5;
// console.log(`Divided value : ${div}`);

// 5. Modulas (%)
// let modulas = 26 % 5;
// console.log(`Remainder Value : ${modulas}`);

// 6. Exponentiation (**)
// let power = 2 ** 2;
// console.log(`Power Value : ${power}`);

// 7. Increment (++)
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);

// 8. Decrement (--)
// let x = 3;
// const y = x--;

// console.log(`x:${x}, y:${y}`);

// let a = 3;
// const b = --a;

// console.log(`a:${a}, b:${b}`);

// 9. Unary (+)
// let num1 = +2;
// console.log(`num1 value : ${num1}`);

// 10. Negation (-)
// let num2 = -2;
// console.log(`num2 value : ${num2}`);

// -----------------------------------------------------------
// JavaScript Assignment Operator

// 1. Assignment (=)

// let a = 2;
// let b = "Ashish";
// let c = true;

// 2. Addition Assignment (+=)
// let a = 100;
// const c = (a += 200);
// console.log(c);

// let x = "Hello ";
// const y = (x += "Ashish");
// console.log(y);

// 3. Subtraction Assignment (-=)
// let a = 300;
// const c = (a -= 200);
// console.log(c);

// let number = 10;
// let string = "num";
// console.log(number -= string);

// 4. Multiplication Assignment (*=)

// let value = 10;
// value *= 2;
// console.log(value);

// let str = "Ashish";
// str *= 5;
// console.log(str);

// 5. Division Assignment (/=)

// let value = 10;
// value /= 2;
// console.log(value);

// 6. Modulas Remainder Assignment (%=)

// let number = 50;
// number %= 6;
// console.log(number);

// 7. Exponentiation Assignment (**=)

// let value = 2;
// value **= 2;
// console.log(value);

// 8. Left Shift Assignment (<<=)

// let value = 1;
// value <<= 2;
// console.log(value);

// 9. Right Shift Assignment (>>=)

// let value = 10;
// value >>= 1;
// console.log(value);

// JavaScript Comparision Operator

// 1. Equality (==)

// let num1 = "20";
// let num2 = 20;
// let num3 = num1 == num2;
// console.log(num3);

// 2. Strict Equality (===)

// let val1 = "20";
// let val2 = 20;
// let finalValue = val1 === val2;
// console.log(finalValue);

// 3. Ineqaulity (!=)

// let val1 = "10";
// let val2 = 20;
// console.log(val1 != val2);

// 4. Strict Ineqaultiy (!==)

// let val1 = "10";
// let val2 = 10;
// console.log(val1 !== val2);

// 5. Greater Than (>)

// let val1 = 3;
// let val2 = 2;
// console.log(val1 > val2);

// 5. Less Than (<)

// let val1 = 3;
// let val2 = 2;
// console.log(val1 < val2);

// 5. Greater Than or Eqaul to (>=)

// let val1 = 3;
// let val2 = 3;
// console.log(val1 >= val2);

// 5. Less Than or Eqaul to (<=)

// let val1 = 3;
// let val2 = 3;
// console.log(val1 <= val2);

// JavaScript Logical Operators

// 1. Logical AND (&&)

// console.log(true && false);
// console.log(true && true);
// console.log(1 && 0);
// console.log(1 && 2);
// console.log("1" && true);
// console.log("0" && true);

// 2.Logical OR (||)

// console.log(true || false);
// console.log(false || false);
// console.log(1 || 0);
// console.log(1 || 2);
// console.log("1" || true);
// console.log("0" || true);

// 3. Logical NOT (!)

// console.log(!true);
// console.log(!false);
// console.log(!"1");
// console.log(!"");
// console.log(!null);

// JavaScript Bitwise Operator

// 1. Bitwise AND (&)

// console.log(true & true);
// console.log(true & false);
// console.log(false & false);

// 2. Bitwise OR (|)
// console.log(true | true);
// console.log(true | false);
// console.log(false | false);
// console.log(false | true);

// 3. Bitwise XOR (|)
// console.log(true ^ true);
// console.log(true ^ false);
// console.log(false ^ false);
// console.log(false ^ true);

// 4. Bitwise NOT (~)
// console.log(~true);
// console.log(~false);
// console.log(~24);
// console.log(~10);
// console.log(~-10);

// 5. Bitwise Left Shift (>>)

// let a = 4;
// console.log(a << 1);
// console.log(a << 4);

// 6. Bitwise Right Shift (<<)

// let a = 4;
// let b = -32;
// console.log(a >> 1);
// console.log(b >> 4);

// 7. Zero Fill Right Shift
// let a = 4;
// let b = -1
// console.log(a>>>1);
// console.log(b>>>4);

// ------------------------------------------------
// JavaScript Ternary Operator

let message =
  "10" === 10 ? "Yes These are Correct" : "Oh soory these are wrong";
console.log(message);
