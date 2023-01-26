// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(3, 4));

// //arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// };
// console.log(yearsUntilRetirement(1991, 'Apple'));

// //function expression
// const yearsUntilRetirement2 = function (birthYear, firstName) {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// };

// console.log(yearsUntilRetirement2(1999, 'Tom'));

// //function declaration
// function yearsUntilRetirement3(birthYear, firstName) {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// }
// console.log(yearsUntilRetirement3(2000, 'Jerry'));

// //function calling other function
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// function yearsUntilRetirement4(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   return `${firstName} can still work for ${age} years`;
// }

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avg1, avg2) {
//   if (avg1 >= avg2 * 2) {
//     return `team1 wins with an avg score of ${avg1} vs ${avg2}`;
//   } else if (avg2 >= avg1 * 2) {
//     return `team2 wins with avg score of ${avg1} vs ${avg2}`;
//   } else {
//     return `no team won with avg scores ${avg1} vs ${avg2}`;
//   }
// }

// const dolpAvg = calcAverage(85, 54, 41);
// const koalAvg = calcAverage(23, 34, 27);

// console.log(checkWinner(dolpAvg, koalAvg));

// //array creation
// const friends = ['apple', 'banana', 'grapes'];
// console.log(friends);

// //another way to create array
// const y = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// //accessing elements in array
// console.log(friends[0]); //apple

// //find number of elements in array
// console.log(friends.length); //3

// //get element in array
// console.log(friends[friends.length - 1]); //grapes

// //add elements into array , mutate array
// friends[2] = 'jackfruit';
// console.log(friends);

// //only primitive values are immutable , array is not primitve , though it is const we can change its value
// // friends = ['hi', 'hello'];//this is illegal

// const firstName = 'apple';
// const person = [firstName, 'shimla', 2037 - 1991, 'teacher', friends];

// console.log(person);

// //array exercise:
// const calcAge = (birthYear) => {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// //Basic Array Operations(Methods):
// const friends = ['apple', 'banana', 'grapes'];

// //push - add element at end of array and returns the length of array
// const a = friends.push('mango');
// console.log(a); //4

// //pop - removes element from end and returns it
// const b = friends.pop();
// console.log(b); //mango

// //unshift -  add element at begining of array and returns length of array
// const c = friends.unshift('watermelon');
// console.log(c); //4

// //shift - remove element from begining and returns the element
// const d = friends.shift();
// console.log(d); //watermelon

// //to know indexOf an element - if element is present it returns index of element ,if not it retuns -1
// console.log(friends.indexOf('apple'));

// //includes - returns true if element is present in array , false if not present
// console.log(friends.includes('apple'));

// //we can use includes to write conditions
// if (friends.includes('apple')) {
//   console.log('You have a friend called Apple');
// }

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   }
//   return bill * 0.2;
// };
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];

// console.log(bills, tips, total);

// //Objects - we define key value pairs
// const tom = {
//   firstName: 'Tom',
//   lastName: 'Jerry',
//   age: 2037 - 1991,
//   job: 'play',
//   friends: ['peter', 'john', 'pony'],
// };

// //we can tell tom has 5 properties , each property has key value pair
// //this way of writing an object , is called object literal syntax
// //we can use objects to define related values, helps in storing unstructured data
// console.log(tom);
// //*** how to retrieve data from object and change it * /
// //Dot Notation
// console.log(tom.lastName); //'Jerry'

// //Bracket Notation
// console.log(tom['firstName']); //Tom

// const nameKey = 'Name';
// console.log(tom['first' + nameKey]);
// console.log(tom['last' + nameKey]); //this works only in bracket notation , not in dot notation

// //When to use bracket
// //when we have to compute property name , as in above case use bracket notation
// //else use dot notation which is cleaner to use
// /*
// const interestedIn = prompt(
//   'What do u want to know about Tom?Choose between firstName , lastName , age, job and friends'
// );
// console.log(interestedIn);

// //** we get undefined when we try to access a property that doesnot exist in object */
// /*
// console.log(tom.interestedIn); //gives undefined

// console.log(tom[interestedIn]); //this gives corresponding value for a key

// if (tom[interestedIn]) {
//   console.log(tom[interestedIn]);
// } else {
//   console.log(
//     'Wrong request!Choose between firstName , lastName , age, job and friends '
//   );
// }
// */
// //using dot , bracket notation to add properties
// tom.location = 'India';
// tom['twitter'] = '@tomfame';
// console.log(tom);

// //Challenge
// //'Tom has 3 friends and his best friend is john

// console.log(
//   `${tom.firstName} has ${tom.friends.length} and his best friend is called ${tom.friends[1]}`
// );

// const tom = {
//   firstName: 'Tom',
//   lastName: 'Jerry',
//   birthYear: 1991,
//   job: 'play',
//   friends: ['peter', 'john', 'pony'],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
//   calcAge1: function () {
//     //this points to tom - which is the current object
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
//   //say we want the age calculation at multiple places in our application
//   //using above way we have to calculate multiple times, thus takes more time
//   //instead we can store that value and use it further , by storing it as a property on object
//   calcAge2: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge2()} year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//   },
// };

// console.log(tom.calcAge(1991));
// console.log(tom['calcAge'](1991));

// console.log(tom.calcAge1());

// console.log(tom.calcAge2());
// console.log(tom.age);

// //challenge - write a method that prints summary of the object
// //"Tom is a 46-year old teacher and he has a drivers license"

// const summary = function (obj) {
//   return `${obj.firstName} is a ${obj.calcAge2()} teacher and he has ${
//     obj.hasDriversLicense ? 'a' : 'no'
//   } license`;
// };

// console.log(summary(tom));

// console.log(tom.getSummary());

// const mark = {
//   firstName: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: 'John',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//   console.log(
//     `${mark.firstName}'s (${markBMI}) is higher than ${john.firstName}'s (${johnBMI})`
//   );
// } else if (johnBMI > markBMI) {
//   console.log(
//     `${john.firstName}'s (${johnBMI}) is higher than ${mark.firstName}'s (${markBMI})`
//   );
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`this is running for the ${i} time`);
// }

// //loop thru an array
// const person = [
//   'apple',
//   'shimla',
//   2037 - 1999,
//   'teacher',
//   ['tom', 'jerry'],
//   true,
// ];
// const types = [];
// for (let i = 0; i < person.length; i++) {
//   console.log(person[i], typeof person[i]);
//   types[i] = typeof person[i];

//   //other way is to use push
//   types.push(typeof person[i]);
// }

// console.log(types);

// //continue and break
// //skip current iteration - continue
// //come out of current loop - break

// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] !== 'string') continue;
//   console.log(person[i], typeof person[i]);
// }

// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] === 'number') break;
//   console.log(person[i], typeof person[i]);
// }

const person = [
  'apple',
  'shimla',
  2037 - 1999,
  'teacher',
  ['tom', 'jerry'],
  true,
];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}

//loops inside loop

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-----starting exercise ${excercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}
