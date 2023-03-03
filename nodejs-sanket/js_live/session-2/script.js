//operators:
console.log(2 + 3);
/*

*/

console.log(12 + 13); //25 -  + here acts as arthimetic operator , as both are numbers

console.log(12 + '13'); //1213   -  here + acts as concatenation between strings

console.log(1 + 1); //2

console.log(1 + '1'); //11

console.log(1 - 1); //0
console.log('1' - 1); //0

//---------------------------------------------------------------------
//Coercion
/*
there is a concept of type conversion

when ever we do operation , based on input we can covert type of input  based on the operation 


we can either do it manually or language based on certain rules automatically converts the types

explicit typecasting/typeconversion 

implicit typecasting/typeconversion   is also known as coercion

--------

Now based on what rules javascript will do the implicit typecasting/coercion  

Lets first see Abstract Operations:
1.these are some set of algorithms present in ECMAscript docs , but they are not available
for usage in ecmascript
i.e we as developers cannot use these operations directly 

2.they are mentioned in docs to help documentation only
in ecma docs there are a lot of things that are done by language internally 

--------

Type Conversion:
ECMAscript implicitly performs automatic type conversion as needed 
*/

/*
There are a lot of abstract operations happening in javascript

lets first see Number 
*/
console.log(Number(undefined)); //NaN
console.log(Number(NaN)); //NaN
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('a')); //NaN
console.log(Number(['1'])); //1
console.log(Number(['1', '2'])); //NaN
console.log(Number({ 1: '1' })); //NaN

/*
say i have --->  1-'1' 

javascript will see what is the datatype of operand1 and then it will forcefully 
converts the 2nd operand to be of same type 


*/
console.log(1 - '1'); //0
console.log(1 - NaN); //NaN
console.log(1 - undefined); //NaN
console.log(1 - null); //1  ---> because 1 - Number(null) ==> 1-0 = 1
/*
it is very important to know

Number(null) ---> 0 

Number(undefined)-->NaN

Number(NaN) ---> NaN 
*/

//below is hexa decimal number operations
console.log(1 - '0xa'); //-9
console.log(0xa - 1); //9
console.log(1 - 0xa); //-9

console.log(0xb - 1); //10
