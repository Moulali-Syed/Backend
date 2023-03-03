/*
ToPrimitive :

ToPrimitive(input,preferredType)


it takes input value and a optional argument 

converts the input to a non object type 

optional argument - in case where input can be converted to multiple types 
we take decision based on this optional argument 

if input type is object ,then
        if preferredType is not present then hint be default
        if preferredType is String , hint be string
        if preferredType is Number , hint be number 

        if hint is default then set it to Number 


                                         hint
                                        /  \
                                string          number
    
                    [toString,valueOf]              [valueOf,toString]

*/

//every object has toString function by default within it
let obj = {};
console.log(obj.toString()); //[object Object]
console.log(typeof obj.toString()); //string
console.log(obj.valueOf()); //{} , it default returns the same object

//we can override the default toString function
let obj1 = {
  toString() {
    return 'lets learn javascript';
  },
};
console.log(obj1.toString()); //lets learn javascript
console.log(obj1.valueOf()); //{ toString: [Function: toString] }

let obj2 = {
  x: 10,
};
console.log(obj2.valueOf()); //{ x: 10 }
console.log(typeof obj2.valueOf()); //object

//we can override the valueOf function
let obj3 = {
  valueOf() {
    return '10';
  },
};
console.log(obj3.valueOf()); //10

console.log(20 - obj); //NaN
console.log(obj - obj); //NaN

let objc1 = {
  x: 7,
  valueOf() {
    return 99;
  },
};
console.log(100 - objc1); //1

let objc2 = {
  x: 8,
  toString() {
    return '88';
  },
};
console.log(90 - objc2); //2

let objc3 = {
  x: 7,
  toString() {
    return {};
  },
};
console.log(100 - objc3); //TypeError
