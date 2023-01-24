/*
const http = require('http');

//Server , creation steps
/*
1.create Server
2.Listen to server



const server = http.createServer((req, res) => {
  //   console.log(req);
  res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
*/

//Routing
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('this is overview');
  } else if (pathName === '/product') {
    res.end('this is product page');
  } else if (pathName === '/api') {
    fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      //   console.log(productData);
      res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found !</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

/*
we can pass the status code and header ,

res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found !</h1>');

we can see these in browser -network tab 

click on the name , u will see the header information 

also we can see status code
*/
