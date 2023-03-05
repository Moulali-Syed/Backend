function process() {
  let i = 0;
  let j = [1, 2, 3];
  function innerProcess() {
    i += 1;
    console.log(j);
    return i;
  }

  return innerProcess;
}
let res = process(); //this returns another function
console.log(res); //[Function: innerProcess]

console.log(res());
console.log(res());
