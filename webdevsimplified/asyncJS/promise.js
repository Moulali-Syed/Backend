/*
const promise = new Promise((resolve, reject) => {
  const sum = 3;
  if (sum == 2) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
*/

//lets convert a callback to a promise

setTimeout(() => {
  console.log('hello');
}, 250);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
setTimeoutPromise(250).then(() => {
  console.log('hello');
});
