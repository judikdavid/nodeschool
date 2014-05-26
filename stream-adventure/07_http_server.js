var http = require('http');
var through = require('through');

function write(buf) {this.queue(buf.toString().toUpperCase())}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
      req.pipe(through(write)).pipe(res);
    }
});
server.listen(process.argv[2]);
