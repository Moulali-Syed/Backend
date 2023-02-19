/*

html 
    <!-- using a data attribute -->
    <button data-btn>Click Me</button>

    <input data-input-text type="text" />

*/

//selecting a data attribute
const btn = document.querySelector('[data-btn]');

console.log(btn);

const printClicked = () => {
  console.log('Clicked a button');
};
btn.addEventListener('click', printClicked);

//removeevent listener

btn.removeEventListener('click', printClicked);

//we get event object in event listener
//we get information on all the things we are doing, we can use target element

const input = document.querySelector('[data-input-text]');
input.addEventListener('change', (e) => {
  console.log('changed');
});
//change event will get triggered when we complete writing in the text field and then moving
//to some other field

// on input - element we can also add , 'input' event , this listens to every input
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});

//----------------------------------------
//lets create a form and select its elements
const form = document.querySelector('[data-form]');
const formInput = document.querySelector('[data-form-input]');
const formBtn = document.querySelector('[data-btn-submit]');

//on submitting form our page gets refreshed , we can stop this behaviour using e.preventDefault()
form.addEventListener('submit', (e) => {
  console.log('Submitted');
});

//similarly when we click on anchor tag , it redirects to that page, we can prevent that
//behaviour using event listeners
const link = document.querySelector('[data-anchor]');
link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('u tried to go to google.com');
});

window.addEventListener('resize', () => console.log('resizing window'));
/*
we have other events as well

mouseenter
mouseleave
mouseover
focus
blur

resize
*/
