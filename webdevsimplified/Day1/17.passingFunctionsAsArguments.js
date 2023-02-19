function printVariable(variable) {
  console.log(variable);
}

console.log(printVariable); //this will print the function itself

function func(x) {
  x('hello !!!');
}

func(printVariable); //hello !!!

// ------------

function sumCallback(a, b, callback) {
  callback(a + b);
}
function handleSum(sum) {
  console.log(sum);
}

sumCallback(10, 20, handleSum);

// -----

function printVar(variable) {
  console.log(variable);
}

function printName(name, callback) {
  callback('hello ' + name);
}

printName('Apple', printVar);
