let n = 1;
let s = '1';

console.log(s == n);

console.log(s === n);

let a = 0;
let b = false;
console.log(a === b); //false - this will prevents implicit type conversion
//always prefer to use === [triple equality operator]
console.log(a == b); //true
