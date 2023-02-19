const div = document.getElementById('div');

div.style.color = 'red';

const paraWithClass = document.getElementsByClassName('p'); //returns all elements with classname
//it returns array like structure , technically not an array
//we can convert it to array using below function as Array.from()
Array.from(paraWithClass);
//now we can use array methods on it
paraWithClass.forEach((p) => (p.style.color = 'green'));

paraWithClass[1].style.color = 'pink';
