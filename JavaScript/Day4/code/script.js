// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(3, 4));

// //arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// };
// console.log(yearsUntilRetirement(1991, 'Apple'));

// //function expression
// const yearsUntilRetirement2 = function (birthYear, firstName) {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// };

// console.log(yearsUntilRetirement2(1999, 'Tom'));

// //function declaration
// function yearsUntilRetirement3(birthYear, firstName) {
//   const currentAge = 2037 - birthYear;
//   return `${firstName} can still work for ${65 - currentAge} years`;
// }
// console.log(yearsUntilRetirement3(2000, 'Jerry'));

// //function calling other function
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// function yearsUntilRetirement4(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   return `${firstName} can still work for ${age} years`;
// }

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avg1, avg2) {
  if (avg1 >= avg2 * 2) {
    return `team1 wins with an avg score of ${avg1} vs ${avg2}`;
  } else if (avg2 >= avg1 * 2) {
    return `team2 wins with avg score of ${avg1} vs ${avg2}`;
  } else {
    return `no team won with avg scores ${avg1} vs ${avg2}`;
  }
}

const dolpAvg = calcAverage(85, 54, 41);
const koalAvg = calcAverage(23, 34, 27);

console.log(checkWinner(dolpAvg, koalAvg));
