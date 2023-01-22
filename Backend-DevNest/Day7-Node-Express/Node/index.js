// console.log('Hello world');

/*
const a = 20;

const obj = {
  average: (a, b) => {
    console.log((a + b) / 2);
  },
  percent: (a, b) => {
    console.log((a / b) * 100);
  },
};
module.exports = a;
module.exports = obj;
*/

// const { readFileSync } = require('fs');
/*
const fs = require('fs');

const a = fs.readFileSync('./sample.txt', 'utf-8');
console.log(a);
/*
fs.readFile('./sample.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
console.log('Hey There');
*/
// console.log(fs);
//********************** *
/*
const fs = require('fs');
const a = 'This is a node tutorial';

fs.writeFile('./sample1.txt', a, () => {
  console.log('Written');
});

console.log('Hey There');
*/
/*
const fs = require('fs');

const a = 'Iam written using fs module';
fs.writeFileSync('sample2.txt', a);

console.log('hello');
*/

/*
const path = require('path');
const a = path.extname('/node/index.js'); //returns the extension of file , here .js will be returned

console.log(a);

const b = path.basename(
  'D:/Learning/NodeJs/Backend-DevNest/Day7-Node-Express/Node'
);
console.log(b); //returns the last folder name , here Node

const c = path.dirname(
  'D:/Learning/NodeJs/Backend-DevNest/Day7-Node-Express/Node'
);
console.log(c); //returns the parent directory of current directory
//here D:/Learning/NodeJs/Backend-DevNest/Day7-Node-Express

const d = '/6pp';
const e = path.join(
  'D:/Learning/NodeJs/Backend-DevNest/Day7-Node-Express/Node' + d
);
console.log(e); //it combines and gives - D:\Learning\NodeJs\Backend-DevNest\Day7-Node-Express\Node\6pp

*/

/*
const os = require('os');
console.log(os.freemem()); //2020470784 - gives freememory in bytes

console.log(os.hostname()); //DESKTOP-5MGC367

console.log(os.userInfo());
/*
{
  uid: -1,
  gid: -1,
  username: 'MOULALI',
  homedir: 'C:\\Users\\MOULALI',
  shell: null
}
*/

// console.log(os.totalmem()); //6312697856

// const http = require('http');

//***************Createing a Server ****************************//

const http = require('http');
const fs = require('fs');

const PORT = 4000;
const hostname = 'localhost';
const home = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((request, response, next) => {
  if (request.url === '/') {
    return response.end(home);
  }
  if (request.url === '/about') {
    return response.end('<h1>About Page</h1>');
  }
  if (request.url === '/contact') {
    return response.end('<h1>Contact Page</h1>');
  }
  if (request.url === '/service') {
    return response.end('<h1>Service Page</h1>');
  } else {
    return response.end('<h1>404 Error Page Not Found</h1>');
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
