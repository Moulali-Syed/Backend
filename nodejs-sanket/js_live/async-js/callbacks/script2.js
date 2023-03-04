// console.log('hi');

// for (let i = 0; i < 10000000000; i++) {
//   //
// }

// console.log('hello');

// console.log('hi there');
// setTimeout(() => {
//   console.log('inside setTimeout');
// }, 2000);

// console.log('after timeout but prints before it');
/*
function functionTakesTime() {
  console.log('hi there');

  for (let i = 0; i < 10000000; i++) {
    //some task
  }

  console.log('bye ');
}

function functionwithTimeout() {
  console.log('hello from timeout func');
  setTimeout(() => {
    console.log('from setTimeout');
  }, 5000);
  console.log('from timeout function ');
}
functionTakesTime();
functionwithTimeout();
functionTakesTime();
/**
hi there
bye 
hello from timeout func
from timeout function
hi there
bye 
from setTimeout
 */

/*


code will start executing in call stack , once it sees something that takes time 

then this code will execute after the time mentioned and will be inside event queue

we have event loop that will keep on checking if our callstack is empty 

if it finds empty then it will send the functions inside event queue one by one 
inside call stack , only if there is nothing left from my native javascript code 
*/

console.log('hi');
setTimeout(() => {
  console.log('hello there');
});

console.log('tom cat');
for (let i = 0; i < 10000000; i++) {}
console.log('sdff');
