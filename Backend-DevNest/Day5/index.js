var fs = require('fs');
fs.mkdirSync('demo');

fs.writeFileSync('demo/hello.txt', 'hello there');

var test = require('./require_test');
var obj = new Test();
console.log(obj.print());
