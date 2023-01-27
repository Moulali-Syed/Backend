'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', () => {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//keypress events:keyboard events occur globally
document.addEventListener('keydown', (e) => {
  console.log(e.key); //gives the key we pressed

  if (e.key === 'Escape') {
    // console.log('Esc was pressed');
    if (!modal.classList.contains('hidden')) {
      () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      };
    }
  }
});
