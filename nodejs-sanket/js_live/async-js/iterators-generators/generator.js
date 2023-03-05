//*generators:
/*
till now our functions keep on executing

we can break , execution of code inside a function, and then execute at a later point of time

written using syntax - function* 

generator function executes till it encounters yield keyword 
*/

function* genFunc() {
  console.log('Iam inside generator function');
  yield 1;
  yield 2;
  console.log('somewhere in middle');
  yield 3;
  yield 4;
}
const iter = genFunc(); //the execution of a generator function doesnot start at time of calling function
console.log(iter); //Object [Generator] {}

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
