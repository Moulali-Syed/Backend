/*
each and every function in js automatically have a property called prototype
and that includes constructor function

every object created by a certain constructor function will get access to
all properties and methods that we define on the constructors prototype property
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const tom = new Person('Tom', 1999);
console.log(tom);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//now each object we create get access to the calcAge as it is defined on prototype
//of constructor function

tom.calcAge(); //38
const matilda = new Person('matilda', 1998);
matilda.calcAge(); //39

const jack = new Person('Jack', 2000);
jack.calcAge(); //37

//we can prototype
console.log(matilda.__proto__);

console.log(jack.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(matilda)); //true
