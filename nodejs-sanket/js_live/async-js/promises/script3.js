// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     console.log('loading data from ', url);

//     setTimeout(() => {
//       resolve('sending data');
//       console.log('download done');
//     }, 1000);
//   });
// }

// console.log('Start');
// let p = fetchData('sfdsa');
// console.log(p);

// p.then(
//   (value) => {
//     console.log('hi ', value);
//   },
//   () => {
//     console.log('reject');
//   }
// );
// /*
// Start
// loading data from  sfdsa
// Promise { <pending> }
// download done
// hi  sending data
// */
/*
function download(url, cb) {
  console.log('fetching data from ', url);
  setTimeout(() => {
    const content = 'ABCDE';
    cb(content); //here we are deciding in other function when to call our callback, we can comment it
    //or we can call twice - problem of Inversion of control
  }, 1000);
}

download('xyz.com', (data) => {
  console.log(data);
});

/*
fetching data from  xyz.com
ABCDE
*/

function downloadProm(url) {
  console.log('fetching data from ', url);
  return new Promise((resolve, reject) => {
    resolve('data fetch successful');
    resolve('hi there'); //this resolve will never be called
    //because once a resolve is executed , no matter how many resolve we have they wont execute,or have no affect
    //thus overcome the issue of callback , in which we dont have any control, how many times our function
    //might get called
  });
}

downloadProm('https://xyz.com')
  .then((val) => {
    console.log('data from fulfilhandler ', val);
    return 'New Promise String';
  })
  .then((val) => {
    console.log(val);
  });
/*
fetching data from  https://xyz.com
data from fulfilhandler  data fetch successful
*/
