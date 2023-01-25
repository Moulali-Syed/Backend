'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';
*/

// function logger() {
//   console.log('My name is Apple');
// }
// //we can use a function any number of times

// //we can invoke function -calling , running, invoking are same

// logger();
// logger();

//***function can also receive data and return data as well**//
/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges .`;
  return juice;
}

const fruitJuice = fruitProcessor(5, 0);
console.log(fruitJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// //** function declaration vs Expressions */
// //the functions declared with function keyword are function declaration
// function add(a, b) {
//   return a + b;
// }

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(calcAge1(2018));

// //parameter - is placeholder in the function , birthYear is parameter
// //arguments - it is passed when function is invoked , 2018 is argument

// //function expression - in this we create a function without name , storing it in  a varibale
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2018);
// console.log(age2);

// // functions are value in javascript , like 10 , 'apple',true

// //** the major difference between function declaration and expression */
// sayHi(); //we can call a function expression before its declaration
// function sayHi() {
//   console.log('Hi');
// }

// sayHello(); //ReferenceError: Cannot access 'sayHello' before initialization
// //function expression can be invoked only after declaring
// const sayHello = function () {
//   console.log(sayHello);
// };
// sayHello(); //it will work here

// //internally this happens because of hoisting

// //prefer - function expressions

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(2018)); //19

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} still has ${retirement} years of work permit`;
};

console.log(yearsUntilRetirement2(2000, 'Apple'));

//arrow functions doesnot have this keyword
