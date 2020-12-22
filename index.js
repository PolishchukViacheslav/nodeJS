const chalk = require('chalk');
const text = require('./data');
const fs = require('fs');
const path = require('path');



console.log(chalk.blue(text), text, __dirname, __filename);

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  if (req.url === '/') {
    fs.readFile(__dirname, 'public', 'index.html', (error, data) => {
      if (error) {
        throw error;
      };

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      
      res.end(data);
    });
  } else if (req.url === '/contact') {
    fs.readFile(__dirname, 'public', 'contact.html');
  }
  console.log('URL>>>>',req.url);
  res.end('<h1>Hello node serv</h1>');
});

server.listen(3000, () => {
  console.log('Server has been fired')
})