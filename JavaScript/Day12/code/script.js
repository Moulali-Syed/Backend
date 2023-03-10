// console.log(23 === 23.0); //true

// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //false

// console.log(+'23'); //when js sees + , it do type coercion
// console.log(Number('23'));

// //parse
// console.log(Number.parseInt('30px')); //30
// console.log(Number.parseInt('e23', 10)); //NaN - we can also pass radix

// console.log(Number.parseFloat('2.5rem')); //2.5
// console.log(Number.parseInt('2.5rem')); //2

// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN(+'20X')); //true

// console.log(Number.isFinite(20)); //true

// console.log(Math.sqrt(3));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 21));
// console.log(Math.min(3, 1, 5, 6));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// //genrating random numbers in a range
// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
// console.log(randomInt(10, 20));

// //Rounding Integers
// console.log(Math.trunc(23.3));
// console.log(Math.round(23.9));
// console.log(Math.ceil(23.4));
// console.log(Math.floor(23.9));

// //trunc and floor work different for negative numbers
// //floor is something better than trunc
// console.log(Math.floor(-23.3)); //-24
// console.log(Math.trunc(-23.3)); //-23

// //Rounding Decimals
// console.log((2.7).toFixed(0)); //always returns string - 3
// console.log((2.7).toFixed(2)); //2.70
// console.log(+(2.345).toFixed(2)); //2.35

// console.log(5 % 2); //1
// console.log(5 / 2); //2.5
// console.log(8 % 3); //2
// console.log(6 % 2); //0
// console.log(7 % 2); //1

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8)); //true
// console.log(isEven(9)); //false

// const diameter = 287_460_000_000;
// console.log(diameter);

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(34556789756789987654566897n); //bigInt - add n at the end
// console.log(BigInt(345432345));

// //operations - work same on bigInt
// console.log(10000n + 1000n);

// //we cannot mix BigInt with other number
// console.log(10n + 10); //gives error

// console.log(typeof 10n);
// console.log(20n === 20); //false
// console.log(20n > 15); //true
// console.log(20n == 20); //true

// //Math operations will not work with BigInt

// console.log(10n / 3n); //3n
// console.log(10 / 3); //3.33333333333333335

// //create a date - we have 4 ways
// const now = new Date();
// console.log(now);

// console.log(new Date('December 24,2015'));
// console.log(new Date('Aug 02 3030 18:05:41'));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0)); //1970-01-01T00:00:00.000Z
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// //working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());

// console.log(future.getTime()); //seconds from 1970, Jan 1

// console.log(Date.now());

// future.setFullYear(2040);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// //create a function that takes 2 dates and returns days between 2 dates
// const daysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

// //code execution doesnot stop 3 seconds here, it will register and moveon to next line
// setTimeout(() => console.log('Here is your pizza'), 3000);
// console.log('Waitin.....');
// // Waitin.....
// // Here is your pizza

// //we can also pass arguments in setTimeout
// setTimeout(
//   (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   'onion',
//   'spinach'
// );

// //we can cancel timer before the specified time

// const ingredients = ['olives', 'spinach'];
// const timer = setTimeout(
//   (ing1, ing2) => console.log(`Here is ur pizza with ${ing1} and ${ing2}`),
//   3000,
//   [...ingredients]
// );
// if (ingredients.includes('spinach')) {
//   clearTimeout(timer);
// }

// //setInterval
// //to call continuosly in a specified interval of time
// const time = setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);
// clearInterval(time);

// //Tabbed component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operatins__tab');
//   console.log(clicked);

//   if (!clicked) return;

//   tabs.forEach((t) => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach((c) => c.classList.remove('operations__content--active'));
//   clicked.classList.add('operations__tab--active');

//   //Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });
