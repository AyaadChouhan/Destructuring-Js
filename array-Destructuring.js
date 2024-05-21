// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
// The destructuring assignment uses similar syntax but uses it on the left-hand side of the assignment instead. It defines which values to unpack from the sourced variable
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// swap values... without distrucuring uses makes code legthy but destructurnig make it easy to swap the values. let see how it looks..
let num1 = 10;
let num2 = 20;
// let tempNum = num2;
// num2 = num1;
// num1 = tempNum;
// console.log(num1, num2); //20, 10..
// now the value is swapped but it looks too lengthy code lets try with destructuring..

[num1, num2] = [num2, num1];
console.log(num1, num2) // now  it look so simple and easy to understand the swapped values;
