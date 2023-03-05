// const a = new Promise((resolve, reject) => {});
// console.log(a); //Promise { <pending> }

// const b = new Promise((resolve, reject) => {
//   resolve('hi');
// });
// console.log(b); //Promise { 'hi' }

// const c = new Promise((resolve, reject) => {
//   reject('bye');
// });
// console.log(c); //Promise { <rejected> 'bye' }

function getRandomInt(num) {
  return Math.floor(Math.random() * 10);
}

/*
function createPromsieWithLoop() {
  return new Promise(function execute(resolve, reject) {
    for (let i = 0; i < 10000000; i++) {}
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}
*/

function createPromsieWithTimeout() {
  return new Promise(function execute(resolve, reject) {
    setTimeout(() => {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 3000);
  });
}
let x = createPromsieWithTimeout();
console.log(x);
for (let i = 0; i < 1000000000; i++) {
  //some task
}
console.log(x);
