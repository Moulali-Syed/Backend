/*
When some error occurs in our code 
we get the line numbers where the error occured

example:

19.stackTreeAndCallStack.js:18 Uncaught ReferenceError: dfdgsdamnbvcvjjkhgfhj is not defined
    at sum (19.stackTreeAndCallStack.js:18:3)
    at doStuff (19.stackTreeAndCallStack.js:14:3)
    at 19.stackTreeAndCallStack.js:22:1
*/

function doStuff(a, b, callback) {
  callback(a, b);
}

function sum(a, b) {
  dfdgsdamnbvcvjjkhgfhj;
  console.log(a + b);
}

doStuff(10, 20, sum);
