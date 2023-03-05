// function* fetchNextElement() {
//   const x = 10;
//   yield 11;
//   console.log('entering after a yield');
//   const y = x + (yield 30);
//   console.log('value of y is ', y);
// }

// const iter = fetchNextElement();
// console.log('first', iter.next());
// console.log('second', iter.next()); //when no argument is passed , it will be considered undefined
// console.log(iter.next(13)); //when argument is passed , it will replace whatever yield value is there
// //so yield 30 --> get replaced by 13

// async function fetchData() {
//   const response = await fetch('https://fakestoreapi.com/products/1');
//   const data = await response.json();
//   console.log(data);
//   console.log(data.category);
//   console.log(data.title);
// }

// fetchData();

function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log('starting to download from ', url);
    setTimeout(() => {
      console.log('downloading completed');
      const content = 'ABCDEF';
      resolve(content);
    }, 1000);
  });
}
const p1 = download('www.abc.com');
const p2 = download('www.abc2.com');
const p3 = download('www.abc2.com');
Promise.all([p1, p2, p3]).then((val) => {
  console.log(val);
});
/*
starting to download from  www.abc.com
starting to download from  www.abc2.com
starting to download from  www.abc2.com
downloading completed
downloading completed
downloading completed
[ 'ABCDEF', 'ABCDEF', 'ABCDEF' ]
*/
