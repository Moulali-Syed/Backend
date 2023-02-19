function sayHi(name) {
  //a is inside the global scope , so it takes from there
  let result = 'Hi ' + name + a;
  console.log(result);
}
let result = 'Apple';
let a = 1;
sayHi(result);

console.log(a);
{
  let a = 2;
  console.log(a);
}
{
  let a = 3;
  console.log(a);
}
