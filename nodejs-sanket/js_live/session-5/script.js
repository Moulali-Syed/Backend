let obj = { x: 10, y: 20 };
let num = 10;

console.log(`My object ${obj}`); //My object [object Object]
//when we try to convert object to string we get error as object Object

console.log(1 < 2 < 3); //true
//****** below is a case of conversion */
console.log(3 > 2 > 1); //false - because  3>2 gives true which means 1 and checks 1>1 and result will be false

console.log(Boolean('')); //false

//* Number  /

console.log(Number('123'));
console.log(Number('abcd'));
console.log(Number(0xa));

let x = NaN;
console.log(isNaN(x)); //true

console.log(isNaN('apple')); //true

console.log(isNaN(1)); //false

console.log(Number.isNaN(x)); //true

//* how to check whether given number is -0
let y = -0;
console.log(Object.is(y, -0)); //true
console.log(Object.is(y, 0)); //false

console.log(Math.sign(-3)); //-1
console.log(Math.sign(-0)); //-0
console.log(Math.sign(0)); //0

/*
custom function that can give sign of a number properly
*/

function signofNum(num) {
  if (num == 0) {
    return 0;
  }
  if (num == -0) {
    return -0;
  }

  if (num > 0) {
    return 1;
  }
  if (num < 0) {
    return -1;
  }
}

//* boxing - javascript - primitive get converted to objects - Boxing
console.log(Number(1).toString()); //1

console.log((1).toString()); ///1
