var http = require('http');

http.get(process.argv['2'], function(stream) {
  stream.setEncoding('utf-8');

  stream.on('data', function (data) {
    console.log(data);
  });

});
