function demo() {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => console.log(res));
}

// demo();

async function de() {
  const response = await fetch('https://fakestoreapi.com/products');
  //   const data = await response.json();
  console.log(await response.json());
}
// de();
/*
function memo() {
  const data = {};

  return async function (url) {
    if (url in data) {
      return data[url];
    } else {
      console.log('long time');
      const res = await fetch(url);
      const resp = await res.json();
      data[url] = resp;
      console.log(resp);
      console.log(data.url);
      console.log(data);
      return resp;
    }
  };
}

const me1 = memo();
me1('https://fakestoreapi.com/products');

me1('https://fakestoreapi.com/products');
*/

function demoMemo() {
  const data = {};

  return function (n) {
    if (n in data) {
      return data[n];
    } else {
      console.log('long time');
      const res = n ** n;
      data[n] = res;
      return res;
    }
  };
}

const c1 = demoMemo();
console.log(c1(3));

console.log(c1(3));
