'use strict';

//convention to start with capital letter , and arrow function will not work as
//construtor function
const Person = function (firstName, birthYear) {
  console.log(this);
};

//the only difference between a constructor function and normal funnction
//is we use new keyword
new Person('Apple', 1880);

//1.a new empty object is create
//2.function is called , this will point to the new object created , because of new
//3.link to prototype
//4.function automatically returns empty object {}

const Human = function (fName, lName) {
  this.fName = fName;
  this.lName = lName;
};

const apple = new Human('Apple', 'Shimla');
console.log(apple);
/*
Human {fName: 'Apple', lName: 'Shimla'}
fName
: 
"Apple"
lName
: 
"Shimla"
[[Prototype]]
: 
Object
*/

//we can now use constructor function to create as many objects we want
//this is like analogy - constructor function is blue print

const banana = new Human('Banana', 'AP');
console.log(banana);
/*
Human {fName: 'Banana', lName: 'AP'}
fName
: 
"Banana"
lName
: 
"AP"
[[Prototype]]
: 
Object
*/
const grapes = new Human('Grapes', 'TS');
console.log(grapes);
/*
Human {fName: 'Grapes', lName: 'TS'}
fName
: 
"Grapes"
lName
: 
"TS"
[[Prototype]]
: 
Object
*/

//we can also check if an object is instanceof constructor function
console.log(apple instanceof Human); //true

const Student = function (fName, birthYear) {
  this.fName = fName;
  this.birthYear = birthYear;

  //never create a method inside constructor function
  //this is a bad practice
  //each object that is created will create a method inside it
  //this create a multiple copies
  //to solve this we use prototypal inheritance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const stud1 = new Student('Tom', 2020);
console.log(stud1);
console.log(stud1.calcAge()); //17
