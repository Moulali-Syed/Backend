console.log(document); //gives complete html

console.log(document.body);

const element = document.createElement('span');
element.innerText = 'HTML';
document.body.appendChild(element);
