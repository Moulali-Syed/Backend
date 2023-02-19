/*
functions helps in reusing the code

they make our code DRY 


*/

function sayHi() {
  console.log('hi');
}

sayHi();

//excercise - create a function that takes no arguments prints ur name

function printName() {
  console.log('Moulali');
}
printName();

//a,b are parameters
function sum(a, b) {
  console.log(a + b);
}

sum(10, 20); //10,20 are arguments

function printNaam(fName) {
  console.log(fName);
}
printNaam('Moulali');

//if we donot pass arguments while calling a function then it is by default get printed as undefined

//return value from function

function sumnums(a, b) {
  return a + b;
}
let s = sumnums(12, 12);
console.log(s);

function printnames(name) {
  return 'Hello ' + name;
}
let wish = printnames('Apple');
console.log(wish);

//anything after return will not run
//console.log() is a function
