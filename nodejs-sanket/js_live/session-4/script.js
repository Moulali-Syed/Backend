// // console.log(Boolean(undefined));

// // console.log(Boolean(-0));
// // console.log(Boolean(null));

// // console.log(Boolean(+0));

// // console.log(Boolean(NaN));

// // console.log(Boolean(''));

// // //all above are falsy values

// // console.log(Boolean({})); //true
// // console.log(Boolean(Symbol(12))); //true

// // console.log(Boolean(Symbol(0))); //true

// console.log(undefined == null); //true - because of type coercion

// let x = 10;
// let y = '10';
// //if x is of number type then , y will also get converted to number
// //because of abstract equality
// console.log(x == y); //true
// console.log(NaN == NaN); //false

// console.log(undefined === undefined); //true
// console.log(null === null); //true
// console.log(NaN === NaN); //false

// console.log(1 == true); //true
// console.log('1' == true); //true

// console.log(null == false); //false

// // let obj = {
// //   x: 10,
// //   valueOf() {
// //     return 100;
// //   },
// //   toString() {
// //     return 'a';
// //   },
// // };

// // console.log(99 == obj); //as 99 is number , we get valueOf called 99==100 , false
// // console.log(100 == obj); // true

// // console.log('a' == obj.toString()); //true

// // console.log(typeof null); //object

// // console.log({ x: 10 } === { x: 10 }); //false
// console.log('' + []); //gives empty string

console.log(0 - '010'); //string with 0 preceding considered as decimal number ->  -10
console.log(0 - 010); //converted to octal number --> 0-8 = -8
console.log(0 - 0xb); //-11 , hexadecimal
console.log(0 - '0xb'); //-11 ,hexadecimal

console.log([] - 1); //-1
console.log([''] - 1); //-1
console.log(['0'] - 1); //-1
