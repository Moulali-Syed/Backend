setTimeout(() => {
  console.log('inside');
}, 1000);

console.log('outside');

//async code runs after sometime

//callback may lead to callback hell ,so we use promises and async await
