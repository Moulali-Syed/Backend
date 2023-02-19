const a = 'absasg';

console.log(parseInt(a)); //NaN

//NaN - Not a number is never equal to anything

console.log(parseInt(a) === NaN); //false
console.log(parseInt(a) == NaN); //false

//to check if something is NaN
console.log(isNaN(NaN)); //true
console.log(isNaN(parseInt(a))); //true
