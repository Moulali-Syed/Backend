// // 'use strict';

// // const bookings = [];
// // const createBooking = function (
// //   flightName,
// //   numpassengers = 1,
// //   price = 199 * numpassengers
// // ) {
// //   //ES5
// //   //   numpassengers = numpassengers || 1;
// //   //   price = price || 500;
// //   const booking = {
// //     flightName,
// //     numpassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');
// // createBooking('LH1234', 2, 400);

// // //if we want to skip a parameter , set it to undefined
// // createBooking('LH82374', undefined, 1000);

// const flight = 'LH1234';

// const jonas = {
//   name: 'Jonas',
//   passport: 23876589,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 279867789) {
//     alert('check in');
//   } else {
//     console.log('wrong passport');
//   }
// };
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //HOF
// const transform = function (str, fn) {
//   console.log(`Original String ${str}`);
//   console.log(`transformed string : ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };
// transform('js is best', upperFirstWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Apple');

// //we can also call as below
// greet('Hello')('chocos');

// const greet1 = (greeting) => {
//   return (name) => console.log(`${greeting} ${name}`);
// };
// greet1('hi')('tomato');

// function displayName() {
//   console.log('Apple');
// }

// displayName(); //invoking function

// //we can invoke function using apply method
// displayName.apply(); //Apple

// //apply also works in similar function call

// let participant1 = {
//   name: 'Lily',
//   battery: 70,
//   chargeBattery: function (a, b) {
//     this.battery = this.battery + a + b;
//   },
// };
// participant1.chargeBattery();
// console.log(participant1);
// /*
// {
//   name: 'Lily',
//   battery: 100,
//   chargeBattery: [Function: chargeBattery]
// }
// */

// //lets create a 2nd participant
// let participant2 = {
//   name: 'Jhon',
//   battery: 30,
// };
// //participant2 doesnot have chargeBattery function
// //there should be a way we take chargeBattery function from participant1 and use it in participant2

// let chargeBatteryOfParticipant2 = participant1.chargeBattery.bind(
//   participant2,
//   20,
//   30
// );
// //above means - i want to call chargeBattery method of participant1 on participant2

// chargeBatteryOfParticipant2();
// console.log(participant2);
/*
{ name: 'Jhon', battery: 80 }
*/

//this way we can reuse methods of one object , in other object

//IIFE
//sometimes we need a function that needs to executed only once, and never again
// const runOnce = (function () {
//   console.log('run once and never again');
// })();

// (() => console.log('run once never again'))();

// //accessing parent and parents, parents scope
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   console.log('Hello there');
// }

// x();
// /*
// Hello There
// 1

// function in setTimeout forms a closure , where ever function goes it takes its lexical scope with it
// once timer expires , puts to call stack and then runs
// */

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log('Namaste Javascript');
// }
// x();

//we want counter that can be modified only using  a function - we can do using closure

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();
// counter1();
// counter1();

// //when we call counter function again it will create a new function again
// var counter2 = counter();
// counter2();

// //using constructor function
// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

function a() {
  var x = 0;
  var z = 10;
  return function b() {
    console.log(x);
  };
}

var y = a();
console.log(x); //but still it is preserved in b function as it is returned with parents lexical scope
console.log(z); //is not accessible here
//we cannot free up , x until it is utilized somewhere - thus closures takes more memory
