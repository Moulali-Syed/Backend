/*
const newArr = arr.slice(2);
console.log(arr, newArr); //[ 'a', 'b', 'c', 'd', 'e' ] [ 'c', 'd', 'e' ]

const newArr1 = arr.slice(2, 4); //4 index is not included
console.log(newArr1); //[ 'c', 'd' ]

const newArr2 = arr.slice(-2);
console.log(newArr2); //gives last 2 elements in array [ 'd', 'e' ]

console.log(arr.slice(-1)); //gives last 1 element in array  [ 'e' ]

console.log(arr.slice(1, -2)); //start from index 1 and except the last 2 elements [ 'b', 'c' ]

//create a shallow copy of array
console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); //we can also create using spread operator
//we can use slice when we have to chain multiple methods
*/

// //splice - changes the original array
// console.log(arr.splice(1, 2)); //1 is index position , 2 is number of elements to be deleted [ 'b', 'c' ]
// console.log(arr.splice(2)); //[ 'c', 'd', 'e' ] - these elements will get deleted from original array
// console.log(arr); //[ 'a', 'b' ]

// arr.splice(-1); //remove last element from array

// //REVERSE - mutates , changes the original array

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
// console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]

//CONCAT - doesnot mutate original array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// const letters = arr.concat(arr2);
// console.log(letters);
/*
[
  'a', 'b', 'c', 'd',
  'e', 'j', 'i', 'h',
  'g', 'f'
]
*/
// console.log([...arr, ...arr2]);

// //Join
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// const letters = [...arr, ...arr2];
// console.log(letters.join('-')); //a-b-c-d-e-j-i-h-g-f

// //AT method
// const arr = [23, 11, 64];
// console.log(arr[0]); //23
// console.log(arr.at(0)); //23

// console.log(arr[arr.length - 1]); //64
// console.log(arr.slice(-1)[0]); //64

// console.log(arr.at(-1)); //64

// console.log('apple'.at(0));//a

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrawn ${Math.abs(movement)}`);
//   }
// }
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrawn ${Math.abs(movement)}`);
//   }
// });

// //to get access to index value using for of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrawn ${Math.abs(movement)}`);
//   }
// }

// //we can do in forEach as well , get index access
// //forEach callback function can take index and array as 2 and 3 rd parameters
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} You withdrawn ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// //map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (movement) {
//   return movement * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);
// /*
// [
//    200,  450, -400,
//   3000, -650, -130,
//     70, 1300
// ]
// [
//   220.00000000000003,
//   495.00000000000006,
//   -440.00000000000006,
//   3300.0000000000005,
//   -715.0000000000001,
//   -143,
//   77,
//   1430.0000000000002
// ]
// */
// //the original array is not mutated , the map method returns a new array

// const movementsusdFor = [];
// for (const mov of movements) {
//   movementsusdFor.push(mov * eurToUsd);
// }
// console.log(movementsusdFor);

// const movementToUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementToUSD);

// const movementDesc = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} : You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
//   }
// });
// console.log(movementDesc);
// /*
// [
//   'Movement 1 : You deposited 200',
//   'Movement 2 : You deposited 450',
//   'Movement 3 : You withdrew 400',
//   'Movement 4 : You deposited 3000',
//   'Movement 5 : You withdrew 650',
//   'Movement 6 : You withdrew 130',
//   'Movement 7 : You deposited 70',
//   'Movement 8 : You deposited 1300'
// ]
// */
// //forEach creates sideeffect - that we are printing in each iteration
// //using map - we returned and saved in array

// const user = 'Steven Thomas Williams';
// const userName = user.toLowerCase().split(' ');
// console.log(userName);
// const username = userName.map((n) => n[0]).join('');
// console.log(username); //stw

// //as a function
// const createUserNames = (user) => {
//   return user
//     .toLowerCase()
//     .split(' ')
//     .map((name) => name[0])
//     .join('');
// };

// const createUserNames1 = (accs) => {
//   accs.forEach((acc) => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map((name) => name[0])
//       .join('');
//   });
// };
// createUserNames1(accounts); //passing an array of objects

// //filter
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter((mov) => mov > 0);
// console.log(deposits); //[ 200, 450, 3000, 70, 1300 ]

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor); //[ 200, 450, 3000, 70, 1300 ]

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals); //[ -400, -650, -130 ]

// //acc - accumulator , cur - cuurentElement , i -index , arr -array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return (acc += cur);
// }, 0);
// //the second parameter 0 here is initial value we want to specify
// console.log(balance); //3840

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2); //3840

// const balance3 = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return (acc += cur);
// }, 100);
// //the second parameter 0 here is initial value we want to specify
// console.log(balance3); //3940

// const calcPrintBalance = (movements) => {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
// };

// //Maximum value of an array
// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const ans = arr.reduce((acc, ele, i, arr) => {
//   if (acc > ele) {
//     return acc;
//   } else {
//     return ele;
//   }
// }, movements[0]);
// console.log(ans); //3000

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepositInUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, cur, i) => acc + cur, 0);
// console.log(totalDepositInUSD); //5522.000000000001

// //say something looks weird result , in between we can log and see the array
// const totalDepositInUSD1 = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, cur, i) => acc + cur, 0);
// console.log(totalDepositInUSD); //5522.000000000001

//find method
//retrieve one element based on a condition
const firstWithDrawal = movements.find((mov) => mov < 0); //returns first element which satisfy the condition
console.log(firstWithDrawal);

//find - return only first match as element
//filter - returns all elements as an array

//search an object from array of objects
const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
