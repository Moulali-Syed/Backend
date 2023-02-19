/*
in arrow function - we dont have the this of its own
so it will point to the parent scope

-----

in normal function it has this associated
*/

/*
say we have html as

<button > Click</button>
*/
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('Arrow function this');
  console.log(this); //window
});

btn.addEventListener('click', function (e) {
  console.log('Normal Function');
  console.log(this); //btn
});
/*
we get below output:

Arrow function this
40.AdditionalDiffBetweenArrownormalFuncs.js:18 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
40.AdditionalDiffBetweenArrownormalFuncs.js:22 Normal Function
40.AdditionalDiffBetweenArrownormalFuncs.js:23 <button data-btn>​Click Me​</button>​
*/
//always try to use arrow functions , this avoids the confusion what this is
//pointing to
