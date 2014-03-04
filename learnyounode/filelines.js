var fs = require('fs');

var file = fs.readFileSync(process.argv['2']);

var linenumbers = file.toString().split('\n');

console.log(linenumbers.length - 1);
