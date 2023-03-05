// function fetchNextElement(array) {
//   let idx = 0;
//   function next() {
//     if (idx >= array.length) {
//       return undefined;
//     }
//     const nextElement = array[idx];
//     idx++;
//     return nextElement;
//   }
//   return { next };
// }

// //somewhere we consume it
// const automaticFetcher = fetchNextElement([99, 11, 13, 15, 3, 9, 2, 1, 4]);

// console.log(automaticFetcher.next()); //99
// console.log(automaticFetcher.next()); //11

let arr = [1, 2, 3];
iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
