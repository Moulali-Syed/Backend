const ele = document.querySelector('p'); //element selector
document.querySelector('.className');
document.querySelector('#id');

const elems = document.querySelectorAll('.classname'); //returns a node list
//which is similar to array

//we can use forEach method on nodelist, but not all array methods are available on it

//so to use all array methods convert it to array using Array.from(nodelistname);
elems.forEach((div) => (div.style.color = 'green'));
