/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Apple');
console.log(23);

//declaring a variable
let firstName = 'Jonas';

console.log(firstName);
*/
/*
variable name cannot start with number 
let 3years = 3;

let jonas&matilda = 'JM';//cannot use other special symbols other that $ and _

let new = 100;//new is reserved keyword, cannot use 
let function = 2;//illegal, it it reserved 

its convention to not start variable name with uppercase 

let PI = 3.1415;//constants can be upper case 

variable names should be descriptive

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

above is far better than below code

let job1 = 'Programmer';
let job2 = 'Teacher';
*/

// *** Assignemnt *** //
/*
let country = 'India';
let continent = 'Asia';
let population = 140000000;

console.log(country, continent, population);
*/
/*
let marks = 100;
console.log(marks);

let firstName = 'Apple';
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//to know the datatype - we use typeof

console.log(typeof true); //boolean
console.log(typeof firstName); //string
console.log(typeof marks); //number

//we can assign a new value , which is declared with let
javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun); //dynamic typing

let isValid; //value and datatype will be undefined in both
console.log(isValid); //undefined
console.log(typeof isValid); //undefined

let year = null;
console.log(year); //null
console.log(typeof year); //object - is a bug in javascript , it will not be corrected for legacy reasons
*/
/*
let age = 12;
age = 21;

const birthyear = 1999;
// birthyear = 2000; //script.js:78 Uncaught TypeError: Assignment to constant variable.

// const job;//this is not legal - missing initializer in const declaration

//if u r sure the variable changes , use let , otherwise mostly use const by default

var job = 'programmer'; //pretty much same as let
job = 'teacher';

// let - is block scope
// var - function scope

lastName = 'hello'; //this will not create a varibale , instead creates a property on global object, never do it
console.log(lastName);
*/

//*** Assignment - DataTypes */
/*
let isIsland = false;
let langauge;

console.log(typeof isIsland); //boolean
console.log(typeof langauge); //undefined
*/

// *** Assignment - let , const , var
// const language = 'Hindi';
/*
const ageApple = 2037 - 2000;
const ageTom = 2037 - 2018;
console.log(ageApple, ageTom);

console.log(ageApple * 2, ageTom / 2, 2 ** 3);

const firstName = 'Apple';
const lastName = 'Shimla';
console.log(firstName + ' ' + lastName); //concatenation

let x = 10 + 5; //assignment operator
console.log(x);
x += 10; //x  = x+10
console.log(x);

console.log(ageApple > ageTom); //true
//we have > < >= <=

console.log(ageApple >= 18);
*/
/*
const now = 2037;
const ageApple = now - 1991;
const ageBanana = now - 2018;

console.log(now - 1991 > now - 2018);
*/

//*** BMI calculation * /
/*
    BMI = mass/height**2 = mass/(heigth*height)
*/

/*
const marksMass = 78;
const marksHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const marksBMI = marksMass / (marksHeight * marksHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = marksBMI > johnBMI;

if (markHigherBMI) {
  console.log('marks BMI is high');
} else {
  console.log('John BMI is higher');
}
*/

const firstName = 'Apple';
const job = 'Teacher';
const birthYear = 2000;
const year = 2037;

const data =
  "I'm  " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(data);

//template literals
console.log(`I'm ${firstName} , a ${year - birthYear} years old ${job} !`);

//using template literals we can create - Multi line strings
console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String
multiple
lines`);
