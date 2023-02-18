// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto); //returns a new object
// //this will directly links to the Prototype of PersonProto
// //no need of the constructor function
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //we must use this for linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'ComputerScience');
// console.log(mike);
// mike.introduce();

// console.log(mike instanceof Student); //true
// console.log(mike instanceof Person); //true
// console.log(mike instanceof Object); //true

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }
// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     //always use super , must be first
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }

//   //we can override
//   calcAge() {
//     console.log(
//       `iam ${
//         2037 - this.birthYear
//       } years old but as a student i feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new Student('Martha Jo', 2012, 'ComputerScience');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// const jay = Object.create(StudentProto);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //it is convention to add _ , to say that it should not be accessible outside class
    //still it will be accessible
    this._movements = [];
    this.locale = navigator.language;
  }

  //if we want to use then create get method

  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  //private method by convention
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

//acc1._movements.push(250);//wrong to use as per convention , so access using get method
const acc1 = new Account('Apple', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
console.log(acc1.getMovements);
