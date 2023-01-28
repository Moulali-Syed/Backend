// const myName = 'Apple'; //global scope

// function first() {
//   const age = 10;
//   if (age >= 10) {
//     const decade = 1; //block scope
//     var millenial = true; //var is function scoped
//   }

//   function second() {
//     console.log(millenial);
//     const job = 'eat';
//     //variable lookup in scope chain
//     //scope has access to variables from all outer scopes
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }

//   second();
// }
// // console.log(millenial);//reference error as var is function scoped
// first();

// 'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     const output = `You are ${age} , born in ${birthYear}`;
//     console.log(output); //You are 23 , born in 2000
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(2000);

// console.log(me); //undefined
// console.log(year); //ReferenceError: Cannot access 'year' before initialization  - because it is in TDZ
// console.log(job); //ReferenceError: Cannot access 'job' before initialization - because it is in TDZ
// var me = 'apple';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3)); //5
// console.log(addArrow1); //undefined
// console.log(addArrow1(1, 1)); //TypeError: addArrow1 is not a function
// console.log(addArrow(3, 4)); //ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExpr(4, 4)); //ReferenceError: Cannot access 'addExpr' before initialization
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var addArrow1 = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// console.log(this);//window object in browser and empty object in node console
'use strict';
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1999);

// const calcAge = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); //window - because it uses lexical scope of this , because its parent has global scope
// };

// calcAge(1999);

// var name = 'Apple';
// const person = {
//   name: 'apple',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //person object - { name: 'apple', calcAge: [Function: calcAge] }
//     console.log(this.year);

//     //the solution to this is using a variable and setting this value
//     // const self = this;
//     // const isMilleanial = function () {
//     //   console.log(self); //person object
//     //   console.log(self.year >= 1981 && self.year <= 1996); //true
//     //   // console.log(this.year >= 1981 && this.year <= 1996); //TypeError: Cannot read properties of undefined (reading 'year')
//     // };

//     //soultion 2
//     const isMilleanial = () => {
//       console.log(this); //person object
//       console.log(this.year >= 1981 && this.year <= 1996); //true
//       // console.log(this.year >= 1981 && this.year <= 1996); //TypeError: Cannot read properties of undefined (reading 'year')
//     };
//     isMilleanial();
//   },
//   greet: () => console.log(`Hey ${this.name}`),
// };
// person.calcAge();
// person.greet(); //Hey Apple [because this is window , in the arrow function]

/*
//when we try to access a property that is not present in object we get undefined
console.log(person.a); //undefined
console.log(this.firstName); //undefined
console.log(window.firstName); //undefined - in browser

//variables created with var - creates property on global window object
*/

// //useful when we want more aguments to be passed
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3, 4, 5); //[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }

// var addArrow = (a, b) => {
//   console.log(arguments); //in browser gets Reference error: arguments is not defined
//   return a + b;
// };
// addArrow();

// //primitive
// let age = 12;
// let oldAge = age;
// age = 13;

// console.log(age); //13
// console.log(oldAge); //12

// //objects - reference types
// const me = {
//   name: 'Apple',
//   age: 12,
// };
// const friend = me;
// friend.age = 14;
// console.log('Friend:', friend);
// console.log('Me', me);
// // Friend: { name: 'Apple', age: 14 }
// // Me { name: 'Apple', age: 14 }

//primitive
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); //Davis Williams [stored in stack]

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);
//points to same memory address in heap
// { firstName: 'Jessica', lastName: 'Davis', age: 27 }
// { firstName: 'Jessica', lastName: 'Davis', age: 27 }

// marriedJessica = {};//this doesnot work because it is const

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Humphyres';
console.log(jessica2);
console.log(jessicaCopy);
// { firstName: 'Jessica', lastName: 'Williams', age: 27 }
// { firstName: 'Jessica', lastName: 'Humphyres', age: 27 }

//Object.assign - only creates a shallow copy , that is only upto one level
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy2 = Object.assign({}, jessica3);
jessicaCopy.lastName = 'Humphyres';
jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');
console.log(jessica3);
console.log(jessicaCopy2);
/*
{
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: [ 'Alice', 'Bob', 'Mary', 'John' ]
}
{
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: [ 'Alice', 'Bob', 'Mary', 'John' ]
}
*/

//while a deep clone copy everything at all levels - we use loadash external library
