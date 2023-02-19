//convert one type to other
/*
Number , String , Boolean
*/
let a = '1';
parseInt(a);

console.log(typeof a); //string
console.log(typeof parseInt(a)); //number

//implicit type conversion
let n1 = 1;
let s1 = 'Hello';
console.log(n1 + s1); //1Hello

console.log(n1 - s1); //NaN

console.log(parseInt('1') == 3);
