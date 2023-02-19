const sum = (a, b) => {
  console.log(a + b);
};

sum(); //NaN
sum(1, 2); //3

const sum1 = (a, b) => a + b;
let ans = sum1(10, 20);
console.log(ans);

const printName = (name) => {
  console.log(name);
};
printName('Apple');

const printHi = (name) => 'hello ' + name;
console.log(printHi('Mango'));

const hi = () => console.log('hi');
hi();
