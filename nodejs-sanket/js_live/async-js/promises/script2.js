// function getRandomNum(num) {
//   return Number(Math.floor(Math.random() * num));
// }

// function promiseCreator() {
//   return new Promise((resolve, reject) => {
//     let num = getRandomNum(5);
//     console.log(num);
//     setTimeout(() => {
//       console.log(num);
//       if (num % 2 == 0) {
//         resolve(num);
//       } else {
//         console.log(num);
//         reject(num);
//       }
//     }, 5000);
//   });
// }

// function promiseCreator2() {
//   return new Promise((resolve, reject) => {
//     let num = getRandomNum(5);

//     if (num % 2 == 0) {
//       resolve(num);
//     } else {
//       console.log(num);
//       reject(num);
//     }
//   });
// }

// console.log('Starting......');
// let x = promiseCreator();

// console.log(x);
// x.then(
//   function (value) {
//     console.log(value);
//     console.log('inside fulfilHandler', value);
//     console.log(x);
//   },
//   function (value) {
//     console.log(value);
//     console.log('inside rejectionHandler', value);
//     console.log(x);
//   }
// );

// console.log('Promise function sync code');
// let z = promiseCreator2();
// console.log(z);
// z.then(
//   (value) => {
//     console.log(value);
//   },
//   (val) => {
//     console.log(val);
//   }
// );

function createProm() {
  return new Promise((resolve, reject) => {
    console.log('inside promise');
    resolve('promsie resolved');
  });
}

setTimeout(() => {
  console.log('inside setTimeout');
}, 0);

console.log('hello');

let p = createProm();
console.log(p);

p.then(
  (value) => {
    console.log('Status is ', value);
  },
  (value) => {
    console.log('Status is ', value);
  }
);
/*
hello
inside promise
Promise { 'promsie resolved' }
Status is  promsie resolved
inside setTimeout
*/
