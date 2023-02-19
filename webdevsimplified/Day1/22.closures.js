let a = 1;
function print() {
  //this forms a closure
  console.log(a);
}

print();

function print1(variable) {
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
  };
}

let res = print1(12);
res(19);
//inner function having access to variables in outer function
//inner scope able to read outer scope
