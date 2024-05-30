// for of loop is mainly for iterable objects

// Array

let arr = ["Ashish", "Anjali", "Aditya", "Sagar"];

for (const i of arr) {
  //   console.log(i); // Gives value
}

// Strings

let str = "Ashish";

for (const i of str) {
  console.log(i);
}

// Map

let mapObject = new Map([
  ["1", "Ashish"],
  ["2", "Anjali"],
  ["3", "Aditya"],
]);

for (const [key, value] of mapObject) {
  //   console.log(key, value);
  console.log(`Key : ${key} and Value : ${value}`);
}
