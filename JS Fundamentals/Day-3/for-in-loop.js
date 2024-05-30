// Majorly for in loop is used for objects but we can also use it for array but it is not recommended
let object = {
  a: "Ashish",
  b: "Anjali",
  c: "Aditya",
};

for (let n in object) {
  console.log(`Key is : ${n} and Value is : ${object[n]}`);
}

// ------------------
// for in loop for array

let arr = ["Ashish", "Anjali", "Aditya", "Sagar"];

for (const i in arr) {
  console.log(i); //gives the index
  console.log(arr[i]); // give the value
    
}
