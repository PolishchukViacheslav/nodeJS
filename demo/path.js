const path = require('path');

console.log('>>>>>>>>',path.basename(__filename))
console.log('>>>>>>>>',path.dirname(__dirname));
console.log('Extension>>>>>>>>',path.extname(__filename));
console.log('Parse>>>>>>>>',path.parse(__filename));
console.log('Parse>>>>>>>>',path.join(__dirname));
