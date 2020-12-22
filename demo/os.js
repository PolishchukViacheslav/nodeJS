const os = require('os');

// console.log('OS', os.platform());
// console.log('OS processor', os.arch());
// console.log('OS cpu use', os.cpus());
console.log('OS free space', os.freemem());
console.log('OS free space total', os.totalmem());
console.log('OS home dir', os.homedir());
console.log('OS plugged', os.uptime() / 3600);


