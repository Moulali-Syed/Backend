// // console.log(Math.sqrt(4));

// // console.log();

// //function declaration
// function myNewFunc() {
//   console.log('Hello');
// }

// function myfunc(a, b, c) {
//   console.log(a, b, c);
// }

// function add(a, b) {
//   return a + b;
// }

// const sub = function (a, b) {
//   return a - b;
// };

// function isEvenOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// }

// const numType = isEvenOdd(23);
// const numType1 = isEvenOdd(24);
// console.log(numType, numType1); //odd even

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// }
// for (let i = 1; i <= 20; i++) {
//  console.log(i , 'is ', isEvenOrOdd(i) ,' number');
// }

// x = console.log();
// console.log(x); //undefined

// function add(a, b) {
//   console.log(a, b); //2 3
//   console.log(arguments); //{ '0': 2, '1': 3, '2': 4 }
// }

// add(2, 3, 4);

// const add1 = function (a, b) {
//   console.log(arguments); //[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6 }
// };
// add1(2, 3, 4, 5, 6);

// const add2 = (a, b) => {
//   console.log(arguments); //arguments is not defined in case of arrow functions
// };
// add2(12, 13, 14);

//prime or not

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
