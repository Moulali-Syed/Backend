// const airline = 'Air India';
// const plane = 'A320';

// //we access as arrays

// console.log(airline[0]);

// //we can also directly do on strings
// console.log('A320'[0]);

// //length of string
// console.log(airline.length);

// //to find an element at a particular index
// console.log(airline.indexOf('r'));

// //get last index
// console.log(airline.lastIndexOf('a'));

// //we can also search entire string
// console.log(airline.indexOf('Ind'));
// //if not found gives -1

// //extract part of string using slice
// console.log(airline.slice(4)); //4 - start index , which gives sub string , it is impossible to mutate string

// console.log(airline.slice(4, 7)); // 4-start index , 7 - endIndex and it is excluded , length equal to end-startInd

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); //start counting from end , gives last 2 characters

// console.log(airline.slice(1, -1)); //cuts of last character

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else {
//     console.log('you got lucky');
//   }
// };

// checkMiddleSeat('11B');

// //Whenever we call a method on a string , behind the scenes it converts the string into a javascript object
// //this process is called boxing
// console.log(new String('Apple')); //this conversion is done by js , on a string when we call a method on string

// //***************************************** */

// const airline = 'Air India';
// const plane = 'A320';

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// const passenger = 'apple';
// const passengerLower = passenger.toLowerCase();
// const passengerCrct = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCrct);

// //comparing emails:
// const email = 'hello@email.io';
// const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);

// //we also have trimStart() and trimEnd() from ES2019

// //replace part of string
// const priceGB = '288,87#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');

// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23 . Boarding door 23!`;
// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replaceAll('door', 'gate'));

// //using regualr expressions
// console.log(announcement.replace(/door/g, 'gate')); //g stands for global

// //methods returning booleans
// const plane1 = 'A320neo';
// console.log(plane1.includes('A320'));

// console.log(plane1.startsWith('A'));

// console.log(plane1.endsWith('o'));

// //practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('U r not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop and a Knife');
// checkBaggage('Camera');
// checkBaggage('Gun');

//******************** */

console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]
console.log('Apple Shimla'.split(' ')); //[ 'Apple', 'Shimla' ]

const [firstName, lastName] = 'Apple Shimla'.split(' '); //[ 'Apple', 'Shimla' ]

//join
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  for (const n of names) {
    console.log(n[0].toUpperCase() + n.slice(1));
  }
};

capitalizeName('apple ann smith davis');

//padding a string - adding characters until it has some desired length
const message = 'go to gate 23';
console.log(message.padStart(25, '+')); //25-is desired length , + - is to be added
console.log(message.padEnd(15, '+'));

//credit card number masking
const maskCreditCardNumber = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCardNumber(43324538927443));

//repeat
const message2 = 'Bad Weather .. all departues will be late';
console.log(message2.repeat(5));

//concat
