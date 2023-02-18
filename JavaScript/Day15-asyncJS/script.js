'use strict';
/*
const div = document.querySelector('div');
//xmlhttp request
//step1
const request = new XMLHttpRequest();
//step2 - open - specify the method as 1st param, 2nd param as path of url

// https://restcountries.com/v2
request.open('GET', 'https://restcountries.com/v2/name/portugal');

//step3
request.send();

//step4
request.addEventListener('load', function () {
  //   console.log(this.responseText);
  //we get json - convert it to js object
  const data = JSON.parse(this.responseText);
  console.log(data[0]);

  const html = `<img class="country__img" src="${data[0].flag}"/>
                    <div class="country__data">
                        <h3 class="country__name">${data[0].name}</h3>`;

  div.insertAdjacentHTML('beforeend', html);
  console.log(data.name);
});
*/

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request); //fetch function returns a promise

// //What are Promises?
// // An object that is used as  a placeholder for the future result of an asynchronous operation
// //A promise is a container for an asynchronously delivered value
// //A container for a future value example:Response from AJAX call

// //we no longer need to rely on events and callbacks passed into
// //asynchronous functions to handle asynchronous results

// //Insteading of nesting callbacks we can chain promises for a sequence of asynchronous
// // operations : escaping callback hell

// /*
// Promise life cycle:

//     pending (before future value is available)
//        |
//     Settled (asynchronous task has finished)
//     /     \
// Fulfilled Rejected

// Fulfilled means the success - the value is now available

// Rejected means an error happened

// thus we are able to handle these different states in our code

// Most of the time we consume promises , and very less time we create promises

// */

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request); //fetch function returns a promise

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) =>
      //json method is available on all response coming from fetch api
      response.json()
    )
    .then((data) => {
      console.log(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      //country2
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

getCountryData('portugal');
