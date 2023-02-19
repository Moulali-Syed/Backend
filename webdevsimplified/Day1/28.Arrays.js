/*
to create a list of values
*/

const a = [1, 2, 3, 4];

console.log(a.length); //4

//access element
console.log(a[0]); //1

console.log(a.push(10)); //adds at end of array , and returns new  length of array
console.log(a);

const b = [9, 8, 7, a];
console.log(b);
const c = [a, b];

const alph = ['A', 'B', 'C', 'D', 'E'];
console.log(alph[2]);

const nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(nums[0][3]);
console.log(nums[1][3]);
console.log(nums[2][2]);
