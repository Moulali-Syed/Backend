//class expression
const PersonCla = class {};

//class declaration - preferred
class PersonCl {
  constructor(fullName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //this will be on prototype object - just as we do in constructor function
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

//access getter as a property
const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge(); //41
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); //true

//we can add methods as below as well
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// //this is really true that class hides the prototypal inheritance
// //which in deed happens behind the scenes

// //1.classes are not hoisted, even if they are class declarations
// //2.classes are also first class citizens , it means we can pass them into functions and return from functions
// //3.classes are executed in strict mode, by default though we are using without mentioning

const account = {
  owner: 'Apple',
  movements: [200, 530, 120, 300],
  //mention get keyword , this is really helpful when we want to do some calculations
  //and read it as a property
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//we can read getter as a property
console.log(account.latest);
//we have to call setter as a property and set a value to it
account.latest = 50;
console.log(account.movements);
