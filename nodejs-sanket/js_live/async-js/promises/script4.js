//download data from url
//save downloaded data in file and return file name
//upload the file to a new url
/*
function download(url, cb) {
  console.log('Starting to download data from url ', url);

  setTimeout(() => {
    console.log('dowloading completed ');
    const content = 'ABCDEF'; //assume dummy data
    cb(content);
  }, 3000);
}

function writeFile(data, cb) {
  console.log('started writing a file with data', data);
  setTimeout(function write() {
    console.log('completed writing data in  a file');
    const filename = 'file.txt';
    cb(filename);
  }, 5000);
}

function upload(url, file, cb) {
  console.log(`Started uploading ${file} on ${url}`);
  setTimeout(function up() {
    console.log('upload completed');
    const response = 'SUCCESS';
    cb(response);
  }, 2000);
}
download('https://xyz.com', function process(content) {
  console.log('downloaded content is ', content);
  writeFile(content, function processWrite(fileName) {
    console.log('we have downloaded and written file , now will upload');
    upload('www.upload.com', fileName, function processUpload(res) {
      console.log('we have uploaded with response ', res);
    });
  });
});
*/
function download(url) {
  return new Promise((resolve, reject) => {
    console.log('Starting to download data from url ', url);

    setTimeout(() => {
      console.log('dowloading completed ');
      const content = 'ABCDEF'; //assume dummy data
      resolve(content);
    }, 3000);
  });
}

function writeFile(data) {
  return new Promise((resolve, reject) => {
    console.log('started writing a file with data', data);
    setTimeout(function write() {
      console.log('completed writing data in  a file');
      const filename = 'file.txt';
      resolve(filename);
    }, 5000);
  });
}

function upload(url, file) {
  return new Promise((resolve, reject) => {
    console.log(`Started uploading ${file} on ${url}`);
    setTimeout(function up() {
      console.log('upload completed');
      const response = 'SUCCESS';
      resolve(response);
    }, 2000);
  });
}

download('www.xyz.com')
  .then(function processDownload(value) {
    console.log('downloading done with following value ', value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log('data written in file  with name ', value);
    return upload(value);
  })
  .then(function processUpload(value) {
    console.log('we have uplaoded with ', value);
  });
