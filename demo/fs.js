const fs = require('fs'); //file system
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log('dir was created');
// })

// const filePath = path.join(__dirname, 'test', 'test.txt');
// fs.appendFile(filePath, '\nHello file from NodeJS', (error) => {
//   if(error) {
//     throw error;
//   }
//   console.log('file was created');
// });

fs.readFile(filePath, 'utf-8',(error, content) => {
  if(error) {
    throw error;
  }
  // const data = Buffer.from(content);
  console.log('content', content)
})