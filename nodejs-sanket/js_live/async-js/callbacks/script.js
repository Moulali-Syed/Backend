// //* Higher order function
// /*
// functions which take another function as argument are called Higher Order functions
// */

// function f(x, fn) {
//   console.log(x);
//   console.log(fn);
//   //   [Function(anonymous)];   or  [Function: exec]
//   fn();
// }

// f('apple', () => {
//   console.log('iam passed as an argument');
// });

// f('apple', function exec() {
//   console.log('iam passed as an argument');
// });

// //* sort array
// //* sort is a Higher Order function
// const arr = [18, 1965, 63, 72, 9, 43, 72, 64, 23, 54, 4, 2, 6, 8, 2];
// console.log(arr.sort()); //sort will not work on numbers as expected , so we have to use as below
// //sort will sort my array in lexicographically by default , it is dictionary order

// //sort in ascending order
// const sortedArr = arr.sort((a, b) => {
//   return a - b;
// });

// console.log(sortedArr);

// //sort in descending order
// const sortArr = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(sortArr);

/**
 fun - is Higher Order function , it takes fn which is a function as argument
 */

// function fun(fn, x) {
//   for (let i = 0; i < x; i++) {
//     console.log(i);
//   }
//   fn();
// }

// fun(() => {
//   console.log('Iam a call back function');
// }, 10);

// //fn - is call back function
// // fun - is higher order fucntion

// //setTimeout is higher order function and the function we pass as an argument is callback function
// setTimeout(() => {
//   console.log('iam printing after some time');
// }, 2000); //will print after 2 seconds

// const timerId = setTimeout(() => {
//   console.log('hi');
// }, 2000);

// clearTimeout(timerId);

/*
problem with callbacks
    1.Inversion of Control
    2.Callback Hell  - callback inside callback , and becomes a pyramid like structure
    this is technically a readbility problem , it becomes hard to debug code 
*/
let arr = [11, 10, 1000, 9, 2, 3, 1];

arr.sort((a, b) => a - b);
console.log(arr);

//iam passing a function inside sort , is there a guarantee that the function which is
//accpeting the function will call the function which is passed

//lets see below example for Inversion of control

//say there is a team A and they created below fucntion

function toDoTask(fn, x) {
  fn(x * x);
}

//now some team B is using this function
toDoTask((num) => {
  console.log('woah num is ', num);
}, 9);

//due to callbacks , iam passing control of how my call back should get executed to toDoTask
//some new member in team A might comment it or call it twice , this is called Inversion of control
//no control in my hand
//this is very crucial operation if it is like we are charging user twice

//this cannot be handled with callback -- so the promises came
