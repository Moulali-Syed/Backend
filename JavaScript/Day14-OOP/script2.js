// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;

//   this.fullName = function () {
//     console.log('full name is ' + name);
//   };
// };

// Person.prototype.calcAge = function (age) {
//   console.log(2037 - this.age);
// };

// const p1 = new Person();
// console.log(p1);
// console.log(p1.__proto__);
// console.log(p1.__proto__.__proto__);
// console.log(p1.__proto__.__proto__.__proto__); //null
// console.log(Person.prototype.constructor); //this gives constructor function

// const arr = [1, 2, 34, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  //doesnot make sense to add behavior in constructor function, instead add to prototype
  //   this.sayhi = function () {
  //     console.log('hi');
  //   };
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.make + ' is going at ' + this.speed + 'km/h');
};

Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(this.make + ' is going at ' + this.speed + 'km/h');
};

const c1 = new Car('BMW', 150);
const c2 = new Car('Ferrari', 200);

console.log(c1);
console.log(c2);

c1.accelerate();
c1.break();
c2.accelerate();
c2.break();

console.log(c1);
console.log(c2);
