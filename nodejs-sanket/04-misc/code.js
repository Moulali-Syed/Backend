// let a = 10;
// console.log(a); //10

// console.log(a++); //10
// console.log(++a); //12

// console.log(a--); //12
// console.log(--a); //10

// let y = '22';
// console.log(typeof y); //string
// console.log(typeof +y); //number
// console.log(typeof y); //string

// let z = '22';
// let p = -z;
// console.log(p); //-22
// console.log(typeof p); //number

// //even if condition is false , do while still executes once
// let z = 10;
// do {
//   console.log(z);
//   z++;
// } while (z < 10);

// let y = 10;
// let ans = y % 2 != 0 ? 'Odd' : 'Even';
// console.log(ans);

// let name = 'Apple';
// switch (name) {
//   case 'App':
//     console.log('App dev');
//     break;
//   case 'Tom':
//     console.log('Jerry');
//     break;
//   case 'Apple':
//     console.log('Red');
//     break;
//   default:
//     console.log('hi');
// }

//default is not mandatory , if none of case mathces if default not specified then we see no output
//we can use number and condition as well in switch case

// function findRoots(a, b, c) {
//   const sqrt = Math.sqrt(b * b - 4 * a * c);
//   const root1 = (-b + sqrt) / (2 * a);
//   const root2 = (-b - sqrt) / (2 * a);
//   console.log(root1, root2);
// }
// findRoots(2, 5, 3);

console.log('abc' === 'abc'); //true
let x = 'abc'; //string literal
let y = 'abc';
console.log(x == y); //true

let z = new String('abc'); //string object
let a = String('abc'); //string
console.log(z);

console.log(a == z);
console.log(a == x);
console.log(z == x);
console.log('abc' == new String('abc'));

console.log(typeof z); //object
console.log(typeof a); //string
console.log(typeof x); //string
console.log(a === z); //false
console.log(a === x); //true
console.log(z === x); //false
console.log('abc' === new String('abc')); //false
