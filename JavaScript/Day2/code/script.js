/*const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('can take driving license');
} else {
  console.log(`${18 - age} years is left to get license `);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}


*/

//**Type conversion */

/*
const inputYear = '1991'; //we want to convert this to a number
console.log(+inputYear + 10); //2001 //one way is to add + before the variable name while using it

console.log(Number(inputYear) + 10); //2001
console.log(typeof inputYear); //is a string

//convert to a number from string
console.log(Number('apple')); //NaN - as it cannot convert a string value to number it gives Not a Number - NaN

console.log(typeof NaN); //Number

//================
console.log(String(23)); //'23'

//we can only convert to Number, String , Boolean
*/

//type coercion
/*
console.log('Iam ' + 23 + ' years old'); //this works because of type coercion

console.log('23' - '10' - 3); //10 , - operates make them numbers and gives 10

console.log('23' + '10' + 3); //23103

console.log('23' * '2'); //46

let n = '1' + 1; //11
n = n - 1; //10
console.log(n); //10

console.log(2 + 3 + 4 + '5'); //'95'
console.log('10' - '4' - '3' - 2 + '5'); //'15'
*/

/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('Apple')); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true

const money = 0;
if (money) {
  console.log('Dont spend it all');
} else {
  console.log('Earn Money');
}

let height;
if (height) {
  console.log('YAY ! Height is defined');
} else {
  console.log('Height is undefined');
}
*/
/*
const age = 18;
if (age === 18) {
  console.log('You just became an adult');
}
*/
//=== - is strict equality operator , it is strict because it doesnot do type coercion
// it only returns true when both values are exactly equal

// == , loose equality  operator , does the type coercion
// console.log('18' == 18); //true
// console.log('18' === 18); //false

//always use strict equality

//------------to read a value from webpage
/*
const fav = prompt('Enter your favourite number');
console.log(fav);
console.log(typeof fav); //string

if (fav == 23) {
  console.log('Cool 23 is an amazing number');
}
*/
// to convert prompt into number
// Number(prompt('Enter your favourite Number'));

//*** if else if else */
/*
if (fav == 23) {
  console.log('Cool 23 is an amazing number');
} else if (fav == 7) {
  console.log('7 is also cool number');
} else {
  console.log('Number is not 23 or 7');
}
*/

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //true

console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log('Sarah is able to driver');
} else {
  console.log('Someone else should drive....');
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
*/

/*
2 teams compete - 3 times , team with highest avg score wins the trophy

1.calculate avg score for each team , using testdata below
2.compare teams avg score to determine winner , dont forget that there can be a draw

bonus1: minimum score of 100 , with this a team only wins if it higher than other and 100 as well
bonus2: minimum scores also applies to draw

Test data:
dolphins: 96,108,89
Koalas: 88,91,110
*/
/*
const dolphinsScoreAvg = (96 + 108 + 89) / 3;
const koalasScoreAvg = (88 + 91 + 110) / 3;
const minimumScore = 100;

console.log(dolphinsScoreAvg, koalasScoreAvg);
if (dolphinsScoreAvg > minimumScore && dolphinsScoreAvg > koalasScoreAvg) {
  console.log('Dolphin team won');
} else if (
  dolphinsScoreAvg === koalasScoreAvg &&
  dolphinsScoreAvg > minimumScore &&
  koalasScoreAvg > minimumScore
) {
  console.log(`It's a tie`);
} else if (koalasScoreAvg > minimumScore && koalasScoreAvg > dolphinsScoreAvg) {
  console.log('Koalas team won');
} else {
  console.log('No team won');
}
*/

/*
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Monday Blues');
    break;
  case 'tuesday':
    console.log('Tuesday work started');
    break;
  case 'wednesday':
    console.log('No gaps today');
    break;
  case 'thursday':
    console.log('nearing to weekend');
    break;
  case 'friday':
    console.log('Waah ! theres a week end next');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('select a right day');
}
*/

//terenary operator: instead of if else we can use ternary operator

// const age = 23;
// age >= 18
//   ? console.log(' I like to have milk')
//   : console.log('Please take chocolates');

/*
const billAmount = 275;

const tip = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.2;

const finalBillValue = billAmount + tip * billAmount;
console.log(finalBillValue);

console.log(
  `The bill was ${billAmount} , the tip was ${tip} and the total value is ${finalBillValue}`
);
*/
