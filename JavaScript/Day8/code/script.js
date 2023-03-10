'use strict';

const restaurant = {
  name: 'Classico Italliano',
  location: 'Via Angelo, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarain', 'Organic'],
  starterMenu: ['Focaccoa', 'Brushchetta', 'garlic Bread', 'caprese salad'],
  mainMenu: ['pizza', 'pasta', 'risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },
};
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole , 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole , 21',
});

//Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//we can give custom names
const {
  name: restaurantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantname, hours, tags);

//setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating  varibales
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);
/*
//array destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); //2 3 4

console.log(arr); //[2,3,4] - original arrays remian unaffected

const [first, second] = restaurant.categories;
console.log(first, second);

const [fir, , sec] = restaurant.categories;
console.log(fir, sec);

//function returning an array
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); //garlic Bread Pizza

//Nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //2 [5 , 6]

const [p, , [q, r]] = nested;
console.log(p, q, r); //2 5 6

//default values
const [e = 1, f = 2, g = 3] = [8, 9];
console.log(e, f, g); //8 9 3
*/

// //spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); //[ 1, 2, 7, 8, 9 ]

// const newArr = [1, 2, ...arr];
// console.log(newArr); //[ 1, 2, 7, 8, 9 ]

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //usecases - make shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //spread operators works on all iterables - array, string , maps, sets .NOT objects
// const str = 'Apple';
// const letters = [...str];
// console.log(letters); //[ 'A', 'p', 'p', 'l', 'e' ]

// //function accepting multiple values
// function ingreidients(ing1, ing2, ing3) {
//   console.log(`Here is ur delicios pasta with ${ing1} ${ing2} ${ing3}`);
// }
// const ings = ['a', 'b', 'c'];
// ingreidients(...ings); //Here is ur delicios pasta with a b c

// //Objects - from ES2018 we can do this
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// //we can also create a shallow copy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //spread operator - to built new array, to pass multiple values to a function
// //rest pattern - to collect multiple values and condense them

// //spread because using in right side of =
// const arr = [1, 2, ...[3, 4]];

// //rest because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //{ thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// //functions - rest parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3); //[2,3]
// add(2, 3, 5, 7); //[ 2, 3, 5, 7 ]

// // short circuting

// // use any datatype , return any data type , short circuting
// console.log(3 || 'Apple'); //3
// console.log('' || 'Apple'); //Apple
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// // if first value is true , no need to check further

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //AND - &&
// console.log(0 && 'Apple'); //0
// console.log(7 && 'Jonas'); //Jonas
// console.log('Hello' && 23 && null && 'jonas'); //null

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish : null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //Logical assignment operator:
// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'la Pizza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// //we can use continue and break with for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// //to get index and value
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
// /*
// 1:Focaccoa
// 2:Brushchetta
// 3:garlic Bread
// 4:caprese salad
// 5:pizza
// 6:pasta
// 7:risotto
// */
// console.log(menu.entries()); //Array Iterator
// console.log([...menu.entries()]);
// /*
// [
//   [ 0, 'Focaccoa' ],
//   [ 1, 'Brushchetta' ],
//   [ 2, 'garlic Bread' ],
//   [ 3, 'caprese salad' ],
//   [ 4, 'pizza' ],
//   [ 5, 'pasta' ],
//   [ 6, 'risotto' ]
// ]
// */

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// /*
// 1:Focaccoa
// 2:Brushchetta
// 3:garlic Bread
// 4:caprese salad
// 5:pizza
// 6:pasta
// 7:risotto
// */

// const hours = {
//   thu: {
//     open: '10:00',
//     close: '22:00',
//   },
//   fri: {
//     open: '11:00',
//     close: '22:00',
//   },
// };
// const res = {
//   //Before ES6
//   hours: hours,
//   //from ES6
//   hours,
// };
// console.log(res);

// //we can directly write method
// const res1 = {
//   eat(ing1, ing2) {
//     console.log(ing1, ing2);
//   },
// };

// res1.eat('a', 'b');

// //we can compute the properties
// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [`days-${2 + 4}`]: {
//     open: 11,
//     close: 21,
//   },
// };

// //by using optional chaining if certain property doesnot exist, it will return undefined immediately
// //to check if a property exists
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thru', 'fri'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} , we open at ${open}`);
// }

// //Methods - check if method exists
// console.log(restaurant.order?.(0, 1) ?? 'Method doesnot exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnot exist');

// //Arrays
// const users = [
//   {
//     name: 'Apple',
//   },
// ];
// const users1 = [];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users1[0]?.name ?? 'User array empty');

// const openingHours = {
//   mon: {
//     open: 11,
//     close: 12,
//   },
//   tue: 12,
//   wed: 10,
//   thur: 9,
// };
// const properties = Object.keys(openingHours);
// console.log(properties); //[ 'mon', 'tue', 'wed', 'thur' ]
// console.log(properties.length); //4

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// //property values:
// const values = Object.values(openingHours);
// console.log(values); //[ 11, 12, 10, 9 ]

// //entire object
// const entries = Object.entries(openingHours);
// console.log(entries); //[ [ 'mon', 11 ], [ 'tue', 12 ], [ 'wed', 10 ], [ 'thur', 9 ] ]

// for (const x of entries) {
//   console.log(x);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Rissoto']);
// console.log(orderSet); //{ 'Pasta', 'Pizza', 'Rissoto' }
// //set doesnot have key value pairs
// //the order of sets is irrelevant

// console.log(new Set('Apple')); //{ 'A', 'p', 'l', 'e' }

// //get size
// console.log(orderSet.size); //3

// //to check if an element is present
// console.log(orderSet.has('Bread')); //false

// //to add element to a set
// orderSet.add('Garlic Bread');

// console.log(orderSet); //{ 'Pasta', 'Pizza', 'Rissoto', 'Garlic Bread' }

// //to delete an element
// orderSet.delete('Rissoto');
// console.log(orderSet); // { 'Pasta', 'Pizza', 'Garlic Bread' }

// //retrieve element in set - is not possible because there is no index
// //as values are unique and has no order - all we can do is whethere a
// //value is present or not

// //Set is also iterable
// for (const order of orderSet) {
//   console.log(order);
// }

// //delete all elements from set
// orderSet.clear();

// //use case - is to remove duplicate values of an array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff); //{ 'Waiter', 'Chef', 'Manager' }

// //set to array conversion is easy using a spread operator
// const uniqueStaff1 = [...new Set(staff)];
// console.log(uniqueStaff1); //[ 'Waiter', 'Chef', 'Manager' ]

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// //different letters in a name
// console.log(new Set('Apple').size); //4

// //creating a Map
// const rest = new Map();

// rest.set('name', 'Classico Itailiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon , Portugal');

// console.log(rest);
// /*
//  {
//   'name' => 'Classico Itailiano',
//   1 => 'Firenze, Italy',
//   2 => 'Lisbon , Portugal'
// }
// */

// //we can chain values in  a map
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(');

// //get values

// console.log(rest.get('name'));
// console.log(rest.get(true));

// console.log(rest);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //check if map contains certain key
// console.log(rest.has('categories'));

// //to delete
// rest.delete(2);
// console.log(rest);

// //to know size
// console.log(rest.size);

// //remove all elements from map
// rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2]));//will give undefined - because they are refernec type both are not pointing same location

// const arr = [1, 2];
// rest.set(arr, 'Test1');
// console.log(rest.get(arr));//Test1 - this works

// //we can create a map as below as well

// const question = new Map([
//   ['question', 'What is best pgm language '],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct????'],
//   [false, 'try again'],
// ]);

// console.log(question);

// //convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// //maps are iterable
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]); //gives array of arrays
// console.log([...question.keys()]);
// console.log([...question.values()]);
