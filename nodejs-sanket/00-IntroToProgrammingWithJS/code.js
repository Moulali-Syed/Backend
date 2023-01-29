// var firstName = 'Apple';
// let lastName = 'Shimla';

// const sayHi = 'Hi';

// console.log(firstName, lastName, sayHi);

// var score = 10;
// var marks = 90;

// let age = 12;
// let flag = 0;

// const x = 100;

// console.log('hello there');

let a = 10;
let b = 'apple';
console.log(a, b); //10 apple

const obj = {
  name: 'apple',
  company: 'google',
};

const obj1 = {
  name: 'apple',
  age: 12,
  posts: {
    createdAt: 'jun12 2022',
  },
};

let a1;
let b1 = null;
console.log(a1, b1); //undefined null

console.log('hello \n hi');
console.log('hi \t nnansf');

console.log('\\n'); //\n

//
/*

*/

let n1 = 10;
let n2 = 3;
console.log(n1 * n2);
console.log(n1 + n2);
console.log(n1 - n2);

console.log(n1 / n2);

console.log(n1 % n2);

console.log(10 > 12); //false
console.log(10 < 12); //true;
console.log(10 >= 12); //false
console.log(10 <= 12); //true

console.log('---------------------');
console.log(!true);
console.log(~true); //-2
console.log(~10); //-11

console.log(10 && 6); //6
console.log(10 && 0); //0
console.log(0 && 10); //0

console.log(0 || 0);

console.log(-0); //-0

console.log(10 / null); //infinity
console.log(undefined / null); //NaN

console.log(1 == '1'); //true
console.log(1 == 1); //true

console.log(typeof 1); //number
console.log(typeof '1'); //string
console.log(typeof undefined); //undefined
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof BigInt(123)); //bigint
console.log(typeof 123n); //bigint
