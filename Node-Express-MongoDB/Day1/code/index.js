const fs = require('fs');

/*
Blocking , synchronous code

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `This is what we know about avacado : ${textIn} \n created on ${Date.now}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
*/

//Non Blocking , synchronous code
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  console.log(data);
  fs.writeFile('./txt/final.txt', `${data}`, 'utf-8', (err) => {
    console.log('Your file has been written');
  });
});
console.log('Will read File');
