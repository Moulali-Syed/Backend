const Person = function (fName, birthYear) {
  this.fName = fName;
  this.birthYear = birthYear;
};

//we can add static method directly on constructor function
Person.sayHi = function () {
  console.log('hi there');
};
Person.sayHi();

//we cannot call on the objects created using Person

//to add static method in class , we use static keyword
class Person1 {
  constructor(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;
  }

  //methods with static keyword are static methods else they will be instance methods
  static hey() {
    console.log('Hey there');
  }
}

Person1.hey();
